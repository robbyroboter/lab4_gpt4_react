import {vrData} from "../mockData/vrData";

export const WomanImage = ({ womanImage: { alt, src } }) => (
    <img src={src} alt={alt} />
);

export const Text = ({ text }) => (
    <p className="blue__text">{text}</p>
);
export const Header = ({ header }) => (
    <h2 className="right__header">{header}</h2>
);

export const Content = ({ content }) => (
    <p className="container__content">{content}</p>
);

const Vr = () => {
    const {womanImage, header, text, content} = vrData;

    return (
        <>
            <div className="vr_left">
                <WomanImage womanImage={womanImage} />
            </div>
            <div className="vr_right">
                <Text text={text}/>
                <Header header={header}/>
                <Content content={content}/>
                <a href="/vr" className="right__cta">Запросить ранний доступ</a>
            </div>
        </>
    );
};

export default Vr;