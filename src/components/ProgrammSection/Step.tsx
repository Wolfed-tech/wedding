import { programs } from "../../helpers/consts";

export const Step = () => {
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 mx-6">
            <div className="grid max-w-2xl mx-auto">
                {programs.map((program, index) => (
                    <div className="flex">
                        <div className="flex flex-col items-center mr-6 h-32 lg:h-20">
                            <div className={!index ? "w-px h-10 opacity-0 sm:h-full" : "w-px h-10 bg-gray-300 sm:h-full"} />
                            <div>
                                <div className="flex items-center justify-center w-8 h-8 text-xl font-medium rounded-full text-purple-700 font-semibold">
                                    {program.time}
                                </div>
                            </div>
                            <div className={index === programs.length - 1 ? "w-px h-full opacity-0" : "w-px h-full bg-gray-300"} />
                        </div>
                        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                            <div>
                                <p className="text-xl font-bold sm:text-base text-gray-900">
                                    {program.label}
                                </p>
                                <p className="text-sm  font-light">
                                    {program.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};