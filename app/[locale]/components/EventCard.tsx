import { ProgramCardInterface } from "@/interfaces/programCard.interface";
import { useTranslations } from "next-intl";
import { FC } from "react";

const EventCard: FC<ProgramCardInterface> = ({titleKey, descKey, city, price, imageUrl}) => {

    const t = useTranslations("price");

    const generatePrice = (price: any) => {
        if(typeof price == 'string') {
            return '$' + price;
        } else {
            return price.map((p: any) => {
                return <div key={p.key}>{t(p.key)}: ${p.price}</div>
            })
        }
    }

    return (
        <div className="ag-card-grid_item">
            <div style={{'backgroundImage': `url(${imageUrl})`}} className="ag-card-image"/>

            <div className="ag-card_info">
                <div className="ag-card_descr">
                <h2 className="ag-card_title">
                    { titleKey }
                </h2>
                <div className="ag-card_text">
                    { descKey }
                </div>
                </div>

                <div className="ag-card_date">
                    {/* { generatePrice(meal?.price) } */}
                    <div>{price}</div>
                    <div>{city}</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;