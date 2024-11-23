import { useLoaderData } from "react-router";

const CampaignArticle = () => {

    const article = useLoaderData();

    console.log(article);

    return (
        <div>
            <h1 className="border-bottom border-secondary pb-2">{article.title}</h1>

            {
                article.sections.map((item, index) => (
                    <section key={index}>
                        <h2>{item.subTitle}</h2>
                        <p className="text-align-justify">{item.paragraph}</p>
                    </section>
                ))
            }
        </div>
    );
}

export default CampaignArticle;
