export const Content = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="sm:text-center md:text-left sm:mx-auto">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative bg-white">Подсказки</span>
                    </span>{' '}
                    и пожелания
                </h2>
                <p className="text-base md:text-lg">
                    Наш праздник пройдёт на природе, поэтому обувайте удобную обувь и захватите с собой тёплую одежду (и зонтик).
                    <br />
                    Мы не хотим, чтобы Вы замёрзли или промокли.
                    <br />
                    <br />
                    Если Вы заходите поддержать цветовую гамму праздника
                    <br />
                    <br />
                    Если Вы опаздываете, не можете найтись, или у Вас возникли какие-либо сложности - Обратитесь к нашему уважаемому организатору по номеру:
                    <br />
                    <p className='font-semibold text-center mt-2'>
                        <a href='tel:+79231255000' className='underline text-sky-600'>+7(800)555-35-35</a> - Фирюза.
                    </p>
                </p>
                <p className="text-base md:text-xl text-center mt-4 font-bold">
                    Ну и, конечно, не забудьте взять с собой хорошее настроение!
                </p>
                <hr className="my-8 border-gray-300" />
                <p className="font-bold text-4xl text-purple-900 text-center">
                    До встречи! (сердечко)
                </p>
            </div>
        </div>
    );
};