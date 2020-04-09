import React from "react";
import ImageItem from "../../components/Image/Image";

const menuMock = [
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/670747936_1_1000x700_srochno-prodam-dom-v-r-ne-osokorkov-kiev.jpg",
        ],

    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/670544820_3_644x461_prodam-shikarnyy-uchastok-s-domom-i-ozerom-35km-ot-kieva-chernogorodka-prodazha-domov.jpg"
        ],
    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/564962736_11_644x461_srochnoprodam-dom-240-mkv-pergoloseevskiy-12-_rev021.jpg",
        ],
    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/602203226_1_644x461_prodam-dom-apostolovo.jpg",
        ],
    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/556353292_1_644x461_prodam-dom-novostroy-novoselovka-svoy-bereg-sudohodnaya-reka-novomoskovsk_rev065.jpg"
        ],
    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/670766716_1_644x461_prodam-zagorodnyy-dom-dnepropetrovsk_rev001.jpg",
        ],
    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/619117958_6_644x461_novaya-tsena-prodam-2-h-et-zagorodnyy-novyy-dom-110m2-_rev002.jpg",
        ],
    },
    {
        "images": [
            "https://img01-olxua.akamaized.net/img-olxua/640197212_1_644x461_prodam-dom-metro-akademika-pavlova-9-minut-harkov_rev002.jpg"
        ],
    }
];

export default function GalleryContainer({items = menuMock}) {
    return(<div className="gallery__wrapper">
        {items.map(({images}) => <ImageItem images={images} />)}
    </div>)
}
