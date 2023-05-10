const countries = [
    {
        name: 'Bangladesh',
        value: 'BN',
        cities: [
            'Dhaka',
            'Chittagong'
        ]
    },
    {
        name: 'India',
        value: 'IN',
        cities: [
            'Delhi',
            'Mumbai'
        ]
    },
    {
        name: 'Pakistan',
        value: 'PK',
        cities: [
            'Lahor',
            'Karachi'
        ]
    }
]
export const getCountries = () => {
    return countries;
}
