'use client'
import { useTranslations } from "next-intl";
import EventCard from "./EventCard";
import { useState } from "react";
import { EventCardInterface } from "@/interfaces/eventsCard.interface";


const EventsCarousel = ({params}: {params: { locale: string}}) => {

    const t = useTranslations();

    const [seachText, setSearchText] = useState('');
    const [filterType, setfilterType] = useState('titleKey');

    const events: EventCardInterface[] = [
        {
            id: '1',
            titleKey: 'Ramadan Kareem',
            descKey: 'As part of community, we support women and youth girls in several fields of life',
            price: 'Free',
            city: 'Montreal',
            imageUrl: '/images/ramadan_kareem.jpg'
        },
        {
            id: '2',
            titleKey: 'Meet up',
            descKey: 'Join us in AlRawdha mosque Cote-Vertu',
            price: '$10',
            city: 'Montreal',
            imageUrl: '/images/muslim-wedding.jpg'
        },
        {
            id: '3',
            titleKey: 'Gaza Protest - Montreal',
            descKey: 'Join us',
            price: 'Free',
            city: 'Montreal',
            imageUrl: '/images/gaza_protest.jpg'
        },
        {
            id: '4',
            titleKey: 'Gaza Protest - Ottawa',
            descKey: 'Join us',
            price: 'Free',
            city: 'Ottawa',
            imageUrl: '/images/gaza_protest.jpg'
        },
        {
            id: '5',
            titleKey: 'Gaza Protest - Toronto',
            descKey: 'Join us',
            price: 'Free',
            city: 'Toronto',
            imageUrl: '/images/gaza_protest.jpg'
        },
        {
            id: '6',
            titleKey: 'Gaza Protest - Vancouver',
            descKey: 'Join us',
            price: 'Free',
            city: 'Vancouver',
            imageUrl: '/images/gaza_protest.jpg'
        }
    ]

    const filteredEvents: EventCardInterface[] = events.filter((event: any) => event[filterType].toLowerCase().includes(seachText.toLocaleLowerCase()));

    const noResultMsg = () => {
        if(filteredEvents.length == 0) {
        return <h2>No result found!</h2>
    }}

    return (
        <section className="ag-card-block">
            <div className="ag-format-container">
                <div className="filter_events_container">
                    <div>
                        <input className="search-input" placeholder={`Search event`} onChange={(e) => setSearchText(e.target.value)} />
                        <button className="blue-btn ml-1">Search</button>
                    </div>
                    <div>
                        <select className="filter_selector" onChange={(e: any) => setfilterType(e.target.value)}>
                            <option value='titleKey'>Title</option>
                            <option value='city'>City</option>
                        </select>
                    </div>
                </div>

                <div className="ag-card_box">
                    <div className="ag-card-grid_list">
                        {
                            filteredEvents.map((event: EventCardInterface) => {
                                    const { id, titleKey, descKey, city, price, imageUrl } = event;
                                    return <EventCard key={id} 
                                            titleKey={titleKey} descKey={descKey}
                                            city={city} price={price} imageUrl={imageUrl}/>
                            })
                        }
                        {
                            noResultMsg()
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsCarousel;