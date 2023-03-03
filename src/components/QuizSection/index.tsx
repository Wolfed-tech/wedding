

const QuizSection = () => {
  return (
    <section className="quizsection">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-4xl font-bold tracking-tight text-gray-900  sm:text-5xl sm:leading-none text-center md:text-left mb-4">
                Опрос
              </h2>
              <h3 className="font-sans text-3xl tracking-tight  sm:text-4xl sm:leading-none text-center md:text-left">
                Для нас это  <span className="text-purple-700 font-bold">важно!</span>
              </h3>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base ">
                Пожалуйста, помогите нам устроить приятный праздник, где Всем будет комфортно и хорошо.
                <br />
                <br />
                Для этого нужно пройти небольшой опрос, который очень нас выручит!
                <br />
                <br />
                Если Вы
                {' '}
                <span className="text-purple-700 font-bold">
                  не сможете
                </span>
                {' '}
                прийти - Вам также нужно пройти.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-800 hover:text-purple-400"
              >
                Пройти опрос!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuizSection