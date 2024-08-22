const data = [
    {
        type: 'Landslide',
        date: '2021-01-01',
        region: 'US',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Oso Landslide',
    },
    {
        type: 'Flood',
        date: '2021-02-15',
        region: 'CA',
        desc: 'Flooding in major areas caused extensive damage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Red River Flood',
    },
    {
        type: 'Earthquake',
        date: '2021-03-10',
        region: 'JP',
        desc: 'A powerful earthquake struck the region, causing widespread destruction. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Great East Japan Earthquake',
    },
    {
        type: 'Flood',
        date: '2021-04-05',
        region: 'MX',
        desc: 'Hurricane brought heavy rains and strong winds, leading to significant damage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Hurricane Wilma',
    },
    {
        type: 'Other',
        date: '2021-05-20',
        region: 'AU',
        desc: 'Wildfires spread rapidly, consuming large areas of forest and threatening homes. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Black Saturday Bushfires',
    },
    {
        type: 'Other',
        date: '2021-06-25',
        region: 'US',
        desc: 'A destructive tornado swept through the region, causing severe damage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Joplin Tornado',
    },
    {
        type: 'Earthquake',
        date: '2021-07-30',
        region: 'ID',
        desc: 'A massive tsunami hit the coast, leading to widespread devastation. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Indian Ocean Earthquake',
    },
    {
        type: 'Other',
        date: '2021-08-15',
        region: 'ZA',
        desc: 'Severe drought conditions affected many regions, leading to water shortages. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Cape Town Water Crisis',
    },
    {
        type: 'Other',
        date: '2021-09-10',
        region: 'RU',
        desc: 'A powerful blizzard caused significant disruption and damage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Great Blizzard of 1888',
    },
    {
        type: 'Other',
        date: '2021-10-05',
        region: 'IS',
        desc: 'A volcanic eruption resulted in ash clouds and lava flow, impacting nearby areas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Eyjafjallajökull Eruption',
    },
    {
        type: 'Earthquake',
        date: '2021-11-01',
        region: 'CL',
        desc: 'A significant earthquake hit the region, causing considerable damage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Valdivia Earthquake',
    },
    {
        type: 'Flood',
        date: '2021-12-10',
        region: 'DE',
        desc: 'Severe flooding affected multiple regions, leading to substantial losses. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'European Floods of 2002',
    },
    {
        type: 'Other',
        date: '2022-01-15',
        region: 'BR',
        desc: 'Wildfires in the Amazon caused extensive environmental damage. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Amazon Fires',
    },
    {
        type: 'Landslide',
        date: '2022-02-20',
        region: 'IN',
        desc: 'A landslide in the Himalayan region led to significant casualties. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Malin Landslide',
    },
    {
        type: 'Earthquake',
        date: '2022-03-05',
        region: 'TR',
        desc: 'A powerful earthquake caused widespread destruction and loss of life. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'İzmit Earthquake',
    },
    {
        type: 'Flood',
        date: '2022-04-10',
        region: 'BD',
        desc: 'Heavy rains caused severe flooding, displacing thousands of people. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Bangladesh Floods',
    },
    {
        type: 'Landslide',
        date: '2022-05-15',
        region: 'NP',
        desc: 'A massive landslide buried several villages, causing significant casualties. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Jure Landslide',
    },
    {
        type: 'Other',
        date: '2022-06-20',
        region: 'US',
        desc: 'Wildfires spread rapidly, threatening homes and natural reserves. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, odit a? Vitae delectus fugiat similique doloribus error quia nemo asperiores expedita, sed architecto temporibus, optio mollitia pariatur natus perspiciatis amet!',
        name: 'Camp Fire',
    },
    {
        type: 'Earthquake',
        date: '2022-07-25',
        region: 'NZ',
        desc: 'A strong earthquake struck, causing damage to infrastructure and homes. Lorem ipsum dolor sit, amet consectetur',
        name: 'Camp Fire',
    }
];

export default data;
