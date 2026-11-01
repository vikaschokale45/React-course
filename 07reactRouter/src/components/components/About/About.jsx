export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRowpM5eeZApik2P9_fVAW5mYuDiuRX-7MBKq0DvjeQ&s=10"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React.js is a JavaScript library for building user interfaces, especially interactive websites and web apps. It lets developers create reusable components, such as buttons, menus, and forms, and combine them into larger pages. React updates the parts of a page that change, which can make apps feel fast and responsive. Its large community and ecosystem also make it a popular choice for modern web development
                        </p>
                        <p className="mt-4 text-gray-600">
                            React.js is used to build interactive websites and web applications, from dashboards and online stores to social media feeds and streaming services. Developers use it to create reusable interface elements, update content dynamically, and build responsive experiences for users. It can also be used to create mobile apps with React Native.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

