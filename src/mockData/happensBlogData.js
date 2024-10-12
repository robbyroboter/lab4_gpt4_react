import First_image from "../assets/img/blog/first_blog.png";
import Second_image from "../assets/img/blog/second_blog.png";
import Third_image from "../assets/img/blog/third_blog.png";
import Fourth_image from "../assets/img/blog/fourth_blog.png";
import Fifth_image from "../assets/img/blog/fifth_blog.png";

const header=
    "Многое Происходит, Мы Ведем об Этом Блог."

const blog__item__large={
    image:{
        src: First_image,
            alt: "one blog",
    },
    text: "Сент 26, 2021",
    header: "GPT-3 и Openai – это будущее. Давайте разберемся, как это?",
}

const blog__small= [
    {
        image: {
            src: Second_image,
            alt: "two blog",
        },
        text: "Сент 26, 2021",
        header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?</h3>,
    },
    {
        image: {
            src: Third_image,
            alt: "three blog",
        },
        text: "Сент 26, 2021",
        header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?</h3>,
            },
            {
                image:{
                src: Fourth_image,
                alt: "four blog",
            },
                text: "Сент 26, 2021",
                header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?</h3>,
            },
    {
        image: {
            src: Fifth_image,
            alt: "five blog",
        },
        text: "Сент 26, 2021",
        header: <h3 className={"h3 big__text__blog"}>GPT-3 и Openai – это будущее. Давайте разберемся, как <br/> это?
        </h3>,
    },
]

const happensBlogData = {
    header,
    blog__item__large,
                blog__small,
            }

            export default happensBlogData