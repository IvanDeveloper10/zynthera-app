import { useEffect, useState, type ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/authContext';

interface LessonForm {
  title: string
  paragraph1: string
  image1: File | null
  paragraph2: string
  image2: File | null
  exampleTitle: string
  example1: string
  example2: string
  example3: string
  example4: string
  exercise1: string
  exercise2: string
};

interface CourseForm {
  title: string
  shortDescription: string
  image: File | null
  category: string
  duration: string
};

interface CreateCourseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCourseCreated?: () => void
};

type BlockType = 'paragraph' | 'image' | 'example' | 'exercise';

interface LessonBlockDraft {
  position: number
  type: BlockType
  content: Record<string, unknown>
};

interface LessonBlockRow extends LessonBlockDraft {
  lesson_id: string
};

const TOTAL_LESSONS = 5;

const createEmptyLesson = (): LessonForm => ({
  title: '',
  paragraph1: '',
  image1: null,
  paragraph2: '',
  image2: null,
  exampleTitle: '',
  example1: '',
  example2: '',
  example3: '',
  example4: '',
  exercise1: '',
  exercise2: '',
});

const createEmptyCourse = (): CourseForm => ({
  title: '',
  shortDescription: '',
  image: null,
  category: '',
  duration: '',
});

/**
 * Convierte una lección del formulario en la lista ordenada de bloques
 * que se guarda en `lesson_blocks`. Si algún día el formulario permite
 * más párrafos o más ejemplos, solo cambia esta función.
 */
const buildLessonBlocks = (
  lesson: LessonForm,
  imagePaths: { image1: string, image2: string }
): LessonBlockDraft[] => {
  const lessonTitle = lesson.title.trim()

  return [
    {
      position: 1,
      type: 'paragraph',
      content: { text: lesson.paragraph1.trim() },
    },
    {
      position: 2,
      type: 'image',
      content: {
        path: imagePaths.image1,
        alt: `Imagen de ${lessonTitle}`,
      },
    },
    {
      position: 3,
      type: 'paragraph',
      content: { text: lesson.paragraph2.trim() },
    },
    {
      position: 4,
      type: 'image',
      content: {
        path: imagePaths.image2,
        alt: `Imagen complementaria de ${lessonTitle}`,
      },
    },
    {
      position: 5,
      type: 'example',
      content: {
        title: lesson.exampleTitle.trim(),
        steps: [
          lesson.example1.trim(),
          lesson.example2.trim(),
          lesson.example3.trim(),
          lesson.example4.trim(),
        ],
      },
    },
    {
      position: 6,
      type: 'exercise',
      content: { text: lesson.exercise1.trim() },
    },
    {
      position: 7,
      type: 'exercise',
      content: { text: lesson.exercise2.trim() },
    },
  ]
}

export default function CreateCourseDialog({ open, onOpenChange, onCourseCreated }: CreateCourseDialogProps) {
  const { user, profile } = useAuth();
  const [step, setStep] = useState(0);
  const [course, setCourse] = useState<CourseForm>(createEmptyCourse());
  const [lessons, setLessons] = useState<LessonForm[]>(Array.from({ length: TOTAL_LESSONS }, createEmptyLesson));
  const [saving, setSaving] = useState(false);
  const [courseImagePreview, setCourseImagePreview] = useState<string | null>(null);
  const [lessonImagePreviews, setLessonImagePreviews] = useState<Array<{image1: string | null, image2: string | null}>>(Array.from({ length: TOTAL_LESSONS }, () => ({image1: null, image2: null})));
  useEffect(() => {
    if (!open) {
      return
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !saving) {
        onOpenChange(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [ open, saving, onOpenChange ])

  useEffect(() => {
    if (!open) {
      resetForm()
    }
  }, [open])

  const resetForm = () => {
    setStep(0)
    setCourse(createEmptyCourse())
    setLessons(Array.from({ length: TOTAL_LESSONS }, createEmptyLesson))
    setCourseImagePreview(null)
    setLessonImagePreviews(
      Array.from(
        { length: TOTAL_LESSONS },
        () => ({
          image1: null,
          image2: null,
        })
      )
    )
    setSaving(false)
  }

  const handleCourseChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setCourse((prev) => ({ ...prev, [name]: value}))
  }

  const handleCourseImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null

    if (!file) {
      return
    }

    if (!file.type.startsWith('image/')) {
      toast.add({
        title: 'Archivo inválido',
        description: 'Selecciona una imagen válida.',
        type: 'error',
      })

      return
    }

    if (file.size > 6 * 1024 * 1024) {
      toast.add({
        title: 'Imagen demasiado grande',
        description: 'La imagen debe pesar máximo 6 MB.',
        type: 'error',
      })

      return
    }

    if (courseImagePreview) {
      URL.revokeObjectURL(courseImagePreview)
    }

    const preview = URL.createObjectURL(file)

    setCourse((prev) => ({...prev, image: file}))

    setCourseImagePreview(preview)
  }

  const handleLessonChange = (lessonIndex: number, field: keyof LessonForm, value: string) => {
    setLessons((prev) =>
      prev.map((lesson, index) => index === lessonIndex ? {...lesson, [field]: value} : lesson)
    )
  }

  const handleLessonImageChange = (lessonIndex: number, field: 'image1' | 'image2', event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    if (!file) {
      return
    }
    if (!file.type.startsWith('image/')) {
      toast.add({
        title: 'Archivo inválido',
        description: 'Selecciona una imagen válida.',
        type: 'error',
      })
      return
    }
    if (file.size > 6 * 1024 * 1024) {
      toast.add({
        title: 'Imagen demasiado grande',
        description: 'La imagen debe pesar máximo 6 MB.',
        type: 'error',
      })
      return
    }
    const previousPreview = lessonImagePreviews[lessonIndex]?.[field]
    if (previousPreview) {
      URL.revokeObjectURL(previousPreview)
    }
    const preview = URL.createObjectURL(file)
    setLessons((prev) => prev.map((lesson, index) => index === lessonIndex ? {...lesson, [field]: file} : lesson))
    setLessonImagePreviews((prev) => prev.map((item, index) => index === lessonIndex ? {...item, [field]: preview} : item))
  }

  const validateCourse = () => {
    if (!course.title.trim()) {
      toast.add({
        title: 'Falta el título',
        description: 'Escribe el título del curso.',
        type: 'error',
      })

      return false
    }

    if (!course.shortDescription.trim()) {
      toast.add({
        title: 'Falta la descripción',
        description: 'Escribe una descripción corta.',
        type: 'error',
      })

      return false
    }

    if (!course.image) {
      toast.add({
        title: 'Falta la imagen',
        description: 'Selecciona una imagen para el curso.',
        type: 'error',
      })

      return false
    }

    if (!course.category.trim()) {
      toast.add({
        title: 'Falta la categoría',
        description: 'Escribe una categoría.',
        type: 'error',
      })

      return false
    }

    if (!course.duration.trim()) {
      toast.add({
        title: 'Falta la duración',
        description: 'Indica cuánto dura el curso.',
        type: 'error',
      })

      return false
    }

    return true
  }

  const validateLesson = (lessonIndex: number) => {
    const lesson = lessons[lessonIndex]

    const fields: Array<[string, string]> = [
      ['título', lesson.title],
      [
        'párrafo 1',
        lesson.paragraph1,
      ],
      [
        'párrafo 2',
        lesson.paragraph2,
      ],
      [
        'título del ejemplo',
        lesson.exampleTitle,
      ],
      [
        'ejemplo 1',
        lesson.example1,
      ],
      [
        'ejemplo 2',
        lesson.example2,
      ],
      [
        'ejemplo 3',
        lesson.example3,
      ],
      [
        'ejemplo 4',
        lesson.example4,
      ],
      [
        'ejercicio 1',
        lesson.exercise1,
      ],
      [
        'ejercicio 2',
        lesson.exercise2,
      ],
    ]

    for (const [field, value] of fields) {
      if (!value.trim()) {
        toast.add({
          title: `Falta ${field}`,
          description: `Completa ${field} de la lección ${lessonIndex + 1}.`,
          type: 'error',
        })

        return false
      }
    }

    if (!lesson.image1) {
      toast.add({
        title: 'Falta la imagen 1',
        description: `Selecciona la imagen 1 de la lección ${lessonIndex + 1}.`,
        type: 'error',
      })

      return false
    }

    if (!lesson.image2) {
      toast.add({
        title: 'Falta la imagen 2',
        description: `Selecciona la imagen 2 de la lección ${lessonIndex + 1}.`,
        type: 'error',
      })

      return false
    }

    return true
  }

  const validateCurrentStep = () => {
    if (step === 0) {
      return validateCourse()
    }

    return validateLesson(
      step - 1
    )
  }

  const nextStep = () => {
    if (!validateCurrentStep()) {
      return
    }

    setStep((prev) =>
      Math.min(prev + 1, TOTAL_LESSONS)
    )
  }

  const previousStep = () => {
    setStep((prev) =>
      Math.max(prev - 1, 0)
    )
  }

  const goToStep = (targetStep: number) => {
    if (saving) {
      return
    }

    if (targetStep <= step) {
      setStep(targetStep)
    }
  }

  /**
   * Sube la imagen y devuelve el `path` dentro del bucket.
   * La URL pública ya no se guarda en la base: se deriva al leer.
   */
  const uploadImage = async (file: File, path: string) => {
    const { error } = await supabase.storage
      .from('course-images')
      .upload(
        path,
        file,
        {
          cacheControl: '3600',
          upsert: false,
          contentType:
            file.type,
        }
      )

    if (error) {
      throw error
    }

    return path
  }

  const createCourse = async () => {
    if (!user) {
      toast.add({
        title: 'Sesión no encontrada',
        description: 'Debes iniciar sesión para crear un curso.',
        type: 'error',
      })

      return
    }

    if (profile?.role !== 'profesor') {
      toast.add({
        title: 'Acceso denegado',
        description: 'Solo los profesores pueden crear cursos.',
        type: 'error',
      })

      return
    }

    if (!validateCourse()) {
      setStep(0)
      return
    }

    for (let index = 0; index < lessons.length; index++) {
      if (!validateLesson(index)) {
        setStep(index + 1)
        return
      }
    }

    setSaving(true)

    let createdCourseId: string | null = null
    const uploadedPaths: string[] = []

    try {
      const courseId = crypto.randomUUID()
      createdCourseId = courseId

      // 1. Rutas de todas las imágenes (curso + 2 por lección).
      const courseImagePath = `courses/${user.id}/${courseId}/cover-${crypto.randomUUID()}`
      const lessonImagePaths = lessons.map((_, index) => ({
        image1: `courses/${user.id}/${courseId}/lesson-${index + 1}-image-1-${crypto.randomUUID()}`,
        image2: `courses/${user.id}/${courseId}/lesson-${index + 1}-image-2-${crypto.randomUUID()}`,
      }))

      uploadedPaths.push(courseImagePath)
      lessonImagePaths.forEach((paths) => {
        uploadedPaths.push(paths.image1, paths.image2)
      })

      // 2. Subidas en paralelo.
      await Promise.all([
        uploadImage(course.image!, courseImagePath),
        ...lessons.flatMap((lesson, index) => [
          uploadImage(lesson.image1!, lessonImagePaths[index].image1),
          uploadImage(lesson.image2!, lessonImagePaths[index].image2),
        ]),
      ])

      // 3. Curso.
      const { error: courseError } = await supabase
        .from('courses')
        .insert({
          id: courseId,
          teacher_id: user.id,
          title: course.title.trim(),
          short_description: course.shortDescription.trim(),
          image_path: courseImagePath,
          category: course.category.trim(),
          duration: course.duration.trim(),
        })

      if (courseError) {
        throw courseError
      }

      // 4. Lecciones (solo identidad y título), en un solo insert.
      const { data: insertedLessons, error: lessonError } = await supabase
        .from('lessons')
        .insert(
          lessons.map((lesson, index) => ({
            course_id: courseId,
            lesson_number: index + 1,
            title: lesson.title.trim(),
          }))
        )
        .select('id, lesson_number')

      if (lessonError) {
        throw lessonError
      }

      if (!insertedLessons || insertedLessons.length !== lessons.length) {
        throw new Error('No se guardaron todas las lecciones.')
      }

      const lessonIdByNumber = new Map<number, string>(
        insertedLessons.map((item) => [
          item.lesson_number as number,
          item.id as string,
        ])
      )

      // 5. Bloques de contenido, también en un solo insert.
      const blockRows: LessonBlockRow[] = lessons.flatMap((lesson, index) => {
        const lessonId = lessonIdByNumber.get(index + 1)

        if (!lessonId) {
          throw new Error(`No se encontró la lección ${index + 1}.`)
        }

        return buildLessonBlocks(
          lesson,
          lessonImagePaths[index]
        ).map((block) => ({
          lesson_id: lessonId,
          ...block,
        }))
      })

      const { error: blockError } = await supabase
        .from('lesson_blocks')
        .insert(blockRows)

      if (blockError) {
        throw blockError
      }

      toast.add({
        title: 'Curso creado correctamente',
        description: 'El curso y sus 5 lecciones fueron guardados.',
        type: 'success',
      })

      onOpenChange(false)
      onCourseCreated?.()
    } catch (error) {
      console.error('Error creando curso:', error)

      // Al borrar el curso, `on delete cascade` se lleva lecciones y bloques.
      if (createdCourseId) {
        await supabase
          .from('courses')
          .delete()
          .eq('id', createdCourseId)
      }

      // Las imágenes no van en cascada: se limpian a mano.
      if (uploadedPaths.length > 0) {
        await supabase.storage
          .from('course-images')
          .remove(uploadedPaths)
      }

      toast.add({
        title: 'No se pudo crear el curso',
        description: error instanceof Error ? error.message : 'Ocurrió un error inesperado.',
        type: 'error',
      })
    } finally {
      setSaving(false)
    }
  }

  if (!open) {
    return null
  }

  const currentLesson = step > 0 ? lessons[step - 1] : null

  const modal = (
    <div
      className='fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5'
      onMouseDown={(event) => {
        if (
          event.target ===
            event.currentTarget &&
          !saving
        ) {
          onOpenChange(false)
        }
      }}>
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='create-course-title'
        className='flex h-[calc(100vh-24px)] w-full max-w-[1180] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl sm:h-[calc(100vh-40px)] sm:rounded-3xl'
        onMouseDown={(event) =>
          event.stopPropagation()
        }>
        <header className='shrink-0 border-b border-zinc-200 bg-white'>
          <div className='flex items-start justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8'>
            <div className='min-w-0'>
              <div className='flex items-center gap-3'>
                <div className='hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white sm:flex'>
                  <i className='fi fi-rr-graduation-cap text-base' />
                </div>
                <div className='min-w-0'>
                  <h1 id='create-course-title' className='truncate text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl'>Crear nuevo curso</h1>
                  <p className='mt-1 text-xs leading-relaxed text-zinc-500 sm:text-sm'>
                    Construye tu curso paso a paso.
                    Completa la información y las
                    cinco lecciones.
                  </p>
                </div>
              </div>
            </div>
            <button
              type='button'
              onClick={() => {
                if (!saving) {
                  onOpenChange(false)
                }
              }}
              disabled={saving}
              aria-label='Cerrar'
              className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-40'>
              <i className='fi fi-rr-cross text-sm' />
            </button>
          </div>
          <div className='border-t border-zinc-100 px-4 py-3 sm:px-6 sm:py-4 lg:px-8'>
            <div className='overflow-x-auto scrollbar-thin'>
              <div className='flex min-w-max items-center'>
                <button
                  type='button'
                  onClick={() =>goToStep(0)}
                  disabled={saving}
                  className='flex shrink-0 items-center gap-2'>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                      step === 0
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-zinc-100 text-zinc-500'
                    }`}>
                    1
                  </span>
                  <span
                    className={`hidden text-sm sm:block ${
                      step === 0
                        ? 'font-semibold text-zinc-950'
                        : 'text-zinc-500'
                    }`}>
                    Información
                  </span>
                </button>
                <div className='mx-3 h-px w-6 bg-zinc-200 sm:mx-4 sm:w-10' />
                {lessons.map((_, index) => {
                    const lessonStep = index + 1
                    const completed = step > lessonStep
                    const active = step === lessonStep
                    return (
                      <div
                        key={lessonStep}
                        className='flex shrink-0 items-center'>
                        <button
                          type='button'
                          onClick={() => goToStep(lessonStep)}
                          disabled={ saving || lessonStep > step}
                          className='flex shrink-0 items-center gap-2'>
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                              active
                                ? 'bg-black text-white shadow-sm'
                                : completed
                                ? 'bg-zinc-200 text-zinc-800'
                                : 'bg-zinc-100 text-zinc-400'
                            }`}>
                            {completed ? (
                              <i className='fi fi-rr-check text-[10px]' />
                            ) : (
                              lessonStep +
                              1
                            )}
                          </span>
                          <span
                            className={`hidden text-sm lg:block ${
                              active
                                ? 'font-semibold text-zinc-950'
                                : completed
                                ? 'text-zinc-700'
                                : 'text-zinc-400'
                            }`}>
                            Lección{' '}
                            {lessonStep}
                          </span>
                        </button>
                        {lessonStep <
                          TOTAL_LESSONS && (
                          <div className='mx-3 h-px w-6 bg-zinc-200 sm:mx-4 sm:w-10' />
                        )}
                      </div>
                    )
                  }
                )}
              </div>
            </div>
            <div className='mt-3 h-1 overflow-hidden rounded-full bg-zinc-100'>
              <div
                className='h-full rounded-full bg-black transition-all duration-300'
                style={{
                  width: `${
                    (step /
                      TOTAL_LESSONS) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </header>
        <main className='min-h-0 flex-1 overflow-y-auto bg-zinc-50'>
          <div className='mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8'>
            {step === 0 && (
              <div className='space-y-6'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>Paso 1 de 6</p>
                  <h2 className='mt-1 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl'>Información del curso</h2>
                  <p className='mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500'>
                    Estos datos aparecerán
                    directamente en la tarjeta
                    que verá el estudiante.
                  </p>
                </div>
                <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]'>
                  <section className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6'>
                    <div className='space-y-5'>
                      <div>
                        <label className='mb-2 block text-sm font-semibold text-zinc-900'>Título del curso</label>
                        <Input
                          name='title'
                          value={course.title}
                          onChange={handleCourseChange}
                          placeholder='Ej: Introducción a Python'
                          className='h-11'
                        />
                      </div>
                      <div>
                        <label className='mb-2 block text-sm font-semibold text-zinc-900'>Descripción corta</label>
                        <Textarea
                          name='shortDescription'
                          value={course.shortDescription}
                          onChange={handleCourseChange}
                          placeholder='Describe brevemente de qué trata el curso...'
                          className='min-h-32 resize-none'
                        />
                        <p className='mt-2 text-xs text-zinc-400'>
                          Máximo recomendado:
                          una descripción breve
                          y clara.
                        </p>
                      </div>
                      <div className='grid gap-5 sm:grid-cols-2'>
                        <div>
                          <label className='mb-2 block text-sm font-semibold text-zinc-900'>Categoría</label>
                          <Input
                            name='category'
                            value={course.category}
                            onChange={handleCourseChange}
                            placeholder='Ej: Programación'
                            className='h-11'
                          />
                        </div>
                        <div>
                          <label className='mb-2 block text-sm font-semibold text-zinc-900'>Duración</label>
                          <Input
                            name='duration'
                            value={course.duration}
                            onChange={handleCourseChange}
                            placeholder='Ej: 5 horas'
                            className='h-11'
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6'>
                    <div>
                      <label className='block text-sm font-semibold text-zinc-900'>Imagen del curso</label>
                      <p className='mt-1 text-xs leading-relaxed text-zinc-500'>
                        Esta imagen será utilizada
                        como portada del curso.
                      </p>
                    </div>
                    <div className='mt-4'>
                      <label
                        htmlFor='course-image'
                        className='group flex min-h-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 transition hover:border-zinc-400 hover:bg-zinc-100'>
                        {courseImagePreview ? (
                          <img
                            src={
                              courseImagePreview
                            }
                            alt='Vista previa del curso'
                            className='h-52 w-full object-cover'
                          />
                        ) : (
                          <div className='flex flex-col items-center px-5 text-center'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm'>
                              <i className='fi fi-rr-picture text-xl text-zinc-400' />
                            </div>
                            <p className='mt-3 text-sm font-semibold text-zinc-700'>Seleccionar imagen</p>
                            <p className='mt-1 text-xs text-zinc-400'>PNG, JPG o WEBP</p>
                            <p className='text-xs text-zinc-400'>Máximo 6 MB</p>
                          </div>
                        )}
                      </label>
                      <Input
                        id='course-image'
                        type='file'
                        accept='image/*'
                        onChange={handleCourseImageChange}
                        className='sr-only'
                      />
                    </div>
                  </section>
                </div>
              </div>
            )}
            {step > 0 &&
              currentLesson && (
                <div className='space-y-6'>
                  <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-end'>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>
                        Paso {step + 1} de 6
                      </p>
                      <h2 className='mt-1 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl'>
                        Lección {step}
                      </h2>
                      <p className='mt-1 text-sm text-zinc-500'>
                        Completa el contenido
                        educativo de esta
                        lección.
                      </p>
                    </div>
                    <span className='w-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm ring-1 ring-zinc-200'>
                      Lección {step} de{' '}
                      {TOTAL_LESSONS}
                    </span>
                  </div>
                  <section className='overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm'>
                    <div className='border-b border-zinc-100 px-5 py-4 sm:px-6'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100'>
                          <i className='fi fi-rr-document text-sm text-zinc-700' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-zinc-950'>Contenido principal</h3>
                          <p className='text-xs text-zinc-500'>
                            Explica el tema de la
                            lección.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-6 p-5 sm:p-6'>
                      <div>
                        <label className='mb-2 block text-sm font-semibold text-zinc-900'>Título de la lección</label>
                        <Input
                          value={currentLesson.title}
                          onChange={(
                            event
                          ) =>
                            handleLessonChange(
                              step - 1,
                              'title',
                              event
                                .target
                                .value
                            )
                          }
                          placeholder='Ej: Variables y tipos de datos'
                          className='h-11'
                        />
                      </div>
                      <div className='grid gap-6 lg:grid-cols-2'>
                        <div>
                          <label className='mb-2 block text-sm font-semibold text-zinc-900'>Párrafo 1</label>
                          <Textarea
                            value={currentLesson.paragraph1}
                            onChange={(
                              event
                            ) =>
                              handleLessonChange(
                                step - 1,
                                'paragraph1',
                                event
                                  .target
                                  .value
                              )
                            }
                            placeholder='Escribe la primera explicación de la lección...'
                            className='min-h-40 resize-none'
                          />
                        </div>
                        <div>
                          <label className='mb-2 block text-sm font-semibold text-zinc-900'>Imagen 1</label>
                          <label
                            htmlFor={`lesson-${step}-image-1`}
                            className='flex min-h-40 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 transition hover:border-zinc-400 hover:bg-zinc-100'>
                            {lessonImagePreviews[
                              step - 1
                            ].image1 ? (
                              <img
                                src={
                                  lessonImagePreviews[
                                    step - 1
                                  ].image1!
                                }
                                alt='Imagen 1'
                                className='h-40 w-full object-cover'
                              />
                            ) : (
                              <>
                                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm'>
                                  <i className='fi fi-rr-picture text-lg text-zinc-400' />
                                </div>
                                <span className='mt-2 text-sm font-semibold text-zinc-600'>
                                  Seleccionar imagen</span>
                                <span className='mt-1 text-xs text-zinc-400'> Máximo 6 MB</span>
                              </>
                            )}
                          </label>
                          <Input
                            id={`lesson-${step}-image-1`}
                            type='file'
                            accept='image/*'
                            onChange={(
                              event
                            ) =>
                              handleLessonImageChange(
                                step - 1,
                                'image1',
                                event
                              )
                            }
                            className='sr-only'
                          />
                        </div>
                      </div>
                      <div className='grid gap-6 lg:grid-cols-2'>
                        <div>
                          <label className='mb-2 block text-sm font-semibold text-zinc-900'>Párrafo 2</label>
                          <Textarea
                            value={currentLesson.paragraph2}
                            onChange={(
                              event
                            ) =>
                              handleLessonChange(
                                step - 1,
                                'paragraph2',
                                event
                                  .target
                                  .value
                              )
                            }
                            placeholder='Escribe la segunda explicación de la lección...'
                            className='min-h-40 resize-none'
                          />
                        </div>
                        <div>
                          <label className='mb-2 block text-sm font-semibold text-zinc-900'>Imagen 2</label>
                          <label
                            htmlFor={`lesson-${step}-image-2`}
                            className='flex min-h-40 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 transition hover:border-zinc-400 hover:bg-zinc-100'>
                            {lessonImagePreviews[
                              step - 1
                            ].image2 ? (
                              <img
                                src={
                                  lessonImagePreviews[
                                    step - 1
                                  ].image2!
                                }
                                alt='Imagen 2'
                                className='h-40 w-full object-cover'
                              />
                            ) : (
                              <>
                                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm'>
                                  <i className='fi fi-rr-picture text-lg text-zinc-400' />
                                </div>
                                <span className='mt-2 text-sm font-semibold text-zinc-600'>Seleccionar imagen</span>
                                <span className='mt-1 text-xs text-zinc-400'> Máximo 6 MB</span>
                              </>
                            )}
                          </label>
                          <Input
                            id={`lesson-${step}-image-2`}
                            type='file'
                            accept='image/*'
                            onChange={(
                              event
                            ) =>
                              handleLessonImageChange(
                                step - 1,
                                'image2',
                                event
                              )
                            }
                            className='sr-only'
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className='overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm'>
                    <div className='border-b border-zinc-100 px-5 py-4 sm:px-6'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100'>
                          <i className='fi fi-rr-lightbulb-on text-sm text-zinc-700' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-zinc-950'>Ejemplo</h3>
                          <p className='text-xs text-zinc-500'>
                            Construye un ejemplo
                            paso a paso.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-5 p-5 sm:p-6'>
                      <div>
                        <label className='mb-2 block text-sm font-semibold text-zinc-900'>Título del ejemplo</label>
                        <Input
                          value={currentLesson.exampleTitle}
                          onChange={(
                            event
                          ) =>
                            handleLessonChange(
                              step - 1,
                              'exampleTitle',
                              event
                                .target
                                .value
                            )
                          }
                          placeholder='Ej: Cómo declarar una variable'
                          className='h-11'
                        />
                      </div>
                      <div className='grid gap-5 md:grid-cols-2'>
                        {[
                          'example1',
                          'example2',
                          'example3',
                          'example4',
                        ].map(
                          (field, index) => (
                            <div key={field}>
                              <label className='mb-2 block text-sm font-semibold text-zinc-900'>
                                Ejemplo{' '}
                                {index +
                                  1}
                              </label>
                              <Textarea
                                value={
                                  currentLesson[
                                    field as keyof LessonForm
                                  ] as string
                                }
                                onChange={(
                                  event
                                ) =>
                                  handleLessonChange(
                                    step -
                                      1,
                                    field as keyof LessonForm,
                                    event
                                      .target
                                      .value
                                  )
                                }
                                placeholder={`Escribe el paso ${
                                  index +
                                  1
                                } del ejemplo...`}
                                className='min-h-28 resize-none'
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </section>
                  <section className='overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm'>
                    <div className='border-b border-zinc-100 px-5 py-4 sm:px-6'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100'>
                          <i className='fi fi-rr-pencil text-sm text-zinc-700' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-zinc-950'>Ejercicios</h3>
                          <p className='text-xs text-zinc-500'>
                            Agrega actividades
                            para practicar.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='grid gap-5 p-5 sm:grid-cols-2 sm:p-6'>
                      <div>
                        <label className='mb-2 block text-sm font-semibold text-zinc-900'>Ejercicio 1</label>
                        <Textarea
                          value={currentLesson.exercise1}
                          onChange={(event) =>
                            handleLessonChange(
                              step - 1,
                              'exercise1',
                              event
                                .target
                                .value
                            )
                          }
                          placeholder='Escribe el primer ejercicio...'
                          className='min-h-32 resize-none'
                        />
                      </div>
                      <div>
                        <label className='mb-2 block text-sm font-semibold text-zinc-900'>Ejercicio 2</label>
                        <Textarea
                          value={currentLesson.exercise2}
                          onChange={(event) =>
                            handleLessonChange(
                              step - 1,
                              'exercise2',
                              event
                                .target
                                .value
                            )
                          }
                          placeholder='Escribe el segundo ejercicio...'
                          className='min-h-32 resize-none'
                        />
                      </div>
                    </div>
                  </section>
                </div>
              )}
          </div>
        </main>
        <footer className='shrink-0 border-t border-zinc-200 bg-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8'>
          <div className='flex items-center justify-between gap-3'>
            <Button
              type='button'
              variant='outline'
              onClick={previousStep}
              disabled={step === 0 || saving}
              className='h-10'>
              <i className='fi fi-rr-arrow-left mr-2' />
              <span className='hidden sm:inline'>
                Anterior
              </span>
            </Button>
            <div className='hidden text-center sm:block'>
              <p className='text-xs font-semibold text-zinc-600'>
                {step === 0
                  ? 'Información del curso'
                  : `Lección ${step} de ${TOTAL_LESSONS}`}
              </p>
              <p className='mt-0.5 text-[11px] text-zinc-400'>
                Paso {step + 1} de 6
              </p>
            </div>
            {step <
            TOTAL_LESSONS ? (
              <Button
                type='button'
                onClick={nextStep}
                disabled={saving}
                className='h-10'>
                <span>
                  Siguiente
                </span>
                <i className='fi fi-rr-arrow-right ml-2' />
              </Button>
            ) : (
              <Button
                type='button'
                onClick={createCourse}
                disabled={saving}
                className='h-10'>
                {saving ? (
                  <>
                    <i className='fi fi-rr-loading mr-2 animate-spin' />
                    <span>
                      Creando...
                    </span>
                  </>
                ) : (
                  <>
                    <i className='fi fi-rr-check mr-2' />
                    <span>Crear curso</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </footer>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}