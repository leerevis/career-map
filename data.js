const careerData = {
    locations: [
        {
            id: "philippines",
            name: "Philippines",
            tier: "deployed",
            level: "country"
        },
        {
            id: "syria",
            name: "Syria",
            tier: "remote-deployment",
            level: "country"
        },
        {
            id: "libya",
            name: "Libya",
            tier: "remote-deployment",
            level: "country"
        },
        {
            id: "turkiye",
            name: "Turkey",
            tier: "remote-support",
            level: "country"
        },
        {
            id: "nepal",
            name: "Nepal",
            tier: "remote-support",
            level: "country"
        },
        {
            id: "sudan",
            name: "Sudan",
            tier: "remote-support",
            level: "country"
        },
        {
            id: "svg",
            name: "Saint Vincent and the Grenadines",
            tier: "remote-support",
            level: "country"
        },
        {
            id: "myanmar",
            name: "Myanmar",
            tier: "remote-support",
            level: "country"
        },
        {
            id: "uk",
            name: "United Kingdom",
            tier: "deployed",
            level: "country"
        }
    ],

    ukRegions: [
        {
            id: "west-midlands-area",
            name: "West Midlands Area",
            level: "county"
        },
        {
            id: "west-midlands-region",
            name: "West Midlands Region",
            level: "region"
        },
        {
            id: "central-england",
            name: "Central England",
            level: "region"
        },
        {
            id: "wales",
            name: "Wales",
            level: "country"
        },
        {
            id: "dorset",
            name: "Dorset",
            level: "county"
        },
        {
            id: "national",
            name: "National (UK)",
            level: "national"
        },
        {
            id: "london",
            name: "London",
            level: "city"
        },
        {
            id: "south-east",
            name: "South East",
            level: "region",
            note: "counties TBD"
        },
        {
            id: "water-companies",
            name: "Water Company Regions",
            level: "custom",
            note: "non-standard footprints, geography TBD"
        }
    ],
    roles: [
        // ── ROLE: British Red Cross - Emergency Response Officer ──
        {
            id: "socenv",
            title: "Insight & Engagement Officer",
            org: "Society for the Environment",
            logo: "mages\society_for_the_environment_logo.jpg",
            center: [52.4068, -1.5197],
            zoom: 7,
            start: "2016-06",
            end: "2017-06",
            location: "west-midlands-area",
            tier: "deployed",
            summary: "Environmental Policy and Advocacy within the UK and Europe.",
            achievements: [
                {
                    label: "Advocacy",
                    stat: "TBC",
                    desc: "Researched and wrote envidence based environmental policy recommendations to the British Government following the UK vote to leave the European Union",
                    lat: 51.4994,
                    lng: -0.1248
                },
                {
                    label: "EU Policy Work",
                    stat: "European",
                    desc: "Secretariat support and evidence-based environmental policy development for the European Network of Environmental Professionals",
                    lat: 50.8466,
                    lng: 4.3776
                }
            ]
        },
        // ── END ROLE ──────────────────────────────────────────────
        // ── ROLE: British Red Cross - Emergency Response Officer ──
        {
            id: "brc-ero-wm",
            title: "Emergency Response Officer",
            org: "British Red Cross",
            logo: "images/british_red_cross_logo.jpg",
            center: [52.4068, -1.5197],
            zoom: 7,
            start: "2017-09",
            end: "2019-06",
            location: "west-midlands-area",
            tier: "deployed",
            summary: "Emergency response at county level in the West Midlands.",
            achievements: [
                {
                    label: "Volunteer Management",
                    stat: "20 volunteers",
                    desc: "Day-to-day management across West Midlands and Warwickshire",
                    lat: 52.3780,
                    lng: -1.5834
                },
                {
                    label: "Beast from the East",
                    stat: "Extreme Weather",
                    desc: "Operational lead for 2018 extreme weather response",
                    lat: 52.5030,
                    lng: -2.0840
                }
            ]
        },
        // ── END ROLE ──────────────────────────────────────────────
        // ── ROLE: British Red Cross - Senior Emergency Response Officer ──
        {
            id: "brc-sero-wm",
            title: "Senior Emergency Response Officer",
            org: "British Red Cross",
            logo: "images/british_red_cross_logo.jpg",
            center: [52.4068, -1.5197],
            zoom: 7,
            start: "2019-06",
            end: "2021-02",
            location: "west-midlands-area",
            tier: "deployed",
            summary: "Senior emergency response covering the West Midlands region.",
            achievements: [
                {
                    label: "Volunteer Management",
                    stat: "20 volunteers",
                    desc: "Day-to-day management of emergency response volunteers across West Midlands and Warwickshire",
                    lat: 52.3780,
                    lng: -1.5834
                },
                {
                    label: "Beast from the East",
                    stat: "Extreme Weather",
                    desc: "Operational lead for 2018 extreme weather response — supporting isolated vulnerable people and bottled water distribution",
                    lat: 52.5030,
                    lng: -2.0840
                },
                {
                    label: "Service Development",
                    stat: "Strategic",
                    desc: "Created service development plan for programme growth and resilience",
                    lat: 52.4068,
                    lng: -1.5197
                }
            ] // end achievements
        } // end role: brc-sero-wm

    ] // end roles array
}; // end careerData