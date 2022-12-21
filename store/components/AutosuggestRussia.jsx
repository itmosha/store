import React, { useEffect, useState, useRef } from 'react';

const AutosuggestRussia = (props) => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "5f6816c8ad52dd8616de181f657663971b6cf7e4";
        const query = "спб";
        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }

        const address = [];
        const promises = new Array(20)
            .fill()
            .map((v, i) => fetch(url, options));
        Promise.all(promises).then((addressArr) => {
            return addressArr.map(res => res.json().then(({}) => {}))
        })
    })

    const setAddressDex = address => {
        setSearch(address);
        setDisplay(false);
    }

    return (
        <div className="client-info-field">
            <input
                onClick={() => setDisplay(!display)}
                placeholder={props.placeholder}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            { display && (
                <div>
                    { options.filter(({ value }) => value.indexOf(search.toLowerCase()) > -1).map((v, i) => {
                        return (
                            <div onClick={() => setAddressDex(v.value)} key={i}>
                                <span>{ v.value }</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default AutosuggestRussia;