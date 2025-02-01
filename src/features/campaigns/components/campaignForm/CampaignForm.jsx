import { useImmerReducer } from 'use-immer';
import addQueryCampaign from '../../firestore/addQueryCampaign';

const reducer = (draft, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'addSection':
            draft.sections.push({ subTitle: '', paragraph: '' });
            break;
        case 'updateSectionTitle':
            draft.sections[payload.index].subTitle = payload.title;
            break;
        case 'updateSectionParagraph':
            draft.sections[payload.index].paragraph = payload.paragraph;
            break;
        default:
    }
};

const initialCampaign = {
    sections: [],
};

const CampaignForm = () => {
    const [campaign, dispatch] = useImmerReducer(reducer, initialCampaign);

    const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = Array.from(formData.entries());

        let formObj = formValues.reduce((acc, item) => {
            acc[item[0]] = item[1];

            return acc;
        }, {});

        formObj = { ...formObj, sections: campaign.sections };

        addQueryCampaign(formObj);
    };

    const onAddSection = () => {
        dispatch({ type: 'addSection' });
    };

    return (
        <div>
            <h1>Campaign Form</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="cmpg-title">Title: </label>
                    <input type="text" name="title" id="cmpg-title" />
                </div>

                <div>
                    <label htmlFor="cmpg-slug">Slug: </label>
                    <input type="text" name="slug" id="cmpg-slug" />
                </div>

                <div>
                    <label htmlFor="cmpg-setting">Setting: </label>
                    <input type="text" name="setting" id="cmpg-setting" />
                </div>

                <div>
                    <label htmlFor="cmpg-hero-img">Hero Img: </label>
                    <input type="text" name="heroImg" id="cmpg-hero-img" />
                </div>

                <div>
                    <label htmlFor="cmpg-release-date">Release Date: </label>
                    <input type="datetime-local" name="releaseDate" id="cmpg-release-date" />
                </div>

                {campaign.sections.map((item, index) => (
                    <section key={index}>
                        <h4>Section {index}:</h4>

                        <div>
                            <label htmlFor="cmpg-sub-title">Sub-Title: </label>
                            <input
                                type="text"
                                name="subTitle"
                                id="cmpg-sub-title"
                                value={item.subTitle}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'updateSectionTitle',
                                        payload: { index, title: event.target.value },
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label htmlFor="cmpg-paragraph">Paragraph: </label>
                            <textarea
                                name="paragraph"
                                id="cmpg-paragraph"
                                value={item.paragraph}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'updateSectionParagraph',
                                        payload: { index, paragraph: event.target.value },
                                    })
                                }
                            ></textarea>
                        </div>
                    </section>
                ))}

                <button type="button" onClick={onAddSection}>
                    Add Section
                </button>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default CampaignForm;
