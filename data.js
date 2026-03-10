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
        // ── ROLE: University of Essex Students' Union - Digital Marketing ──
        {
            id: "essex-su-digital",
            title: "Digital Marketing & Social Media Assistant",
            org: "University of Essex Students' Union",
            logo: "images/essex_su.jpg",
            center: [51.8793, 0.9408],
            zoom: 15,
            start: "2013-09",
            end: "2014-06",
            location: "essex",
            tier: "deployed",
            summary: "Digital marketing and social media role covering all three Essex campuses. Developed data-driven audience targeting, student needs reporting and led brand transition.",
            achievements: [
                {
                    label: "Analytics & Audience Targeting",
                    stat: "Data-driven",
                    desc: "Matched social analytics to event demographics to ensure inclusive, targeted messaging across all student segments",
                    lat: 51.87717,
                    lng: 0.94713
                },
                {
                    label: "Brand Transition",
                    stat: "Legacy",
                    desc: "Led social media team through full rebranding, developing tone of voice still in use today",
                    lat: 51.87626,
                    lng: 0.94601
                },
                {
                    label: "Social Listening Programme",
                    stat: "Weekly",
                    desc: "Designed weekly student needs reporting for senior management - early precursor to humanitarian needs assessment work",
                    lat: 51.87749,
                    lng: 0.94476
                }
            ]
        }, // end role: essex-su-digital
        // ── END ROLE ─────────────────────────────────────────────────────
        // ── ROLE: WaterAid - Water Industry Partnerships Officer ──
        {
            id: "wateraid-wipo",
            title: "Water Industry Partnerships Officer",
            org: "WaterAid UK",
            logo: "images/wateraid_logo.jpg",
            center: [52.4068, -1.5197],
            zoom: 7,
            start: "2015-08",
            end: "2016-04",
            location: "central-england",
            tier: "deployed",
            summary: "Corporate partnership role working with three water companies across Central England, raising £1.6m while maintaining strong ROI on all fundraising activities. Required deep WASH technical knowledge to engage both engineering and non-technical corporate audiences — skills directly transferable to future humanitarian WASH assessments.",
            achievements: [
            {
                label: "Partnership Fundraising",
                stat: "£1.6m raised",
                desc: "Generated £1.6m across three water company partnerships through marquee fundraising events and innovative schemes, including a long-term graduate sponsorship programme that linked development project progress with graduate career growth. Required translating complex WASH concepts to both technical engineering audiences and non-technical corporate volunteers.",
                lat: 52.40493,
                lng: -1.50623
            },
            {
                label: "Volunteer Capacity Building",
                stat: "Corporate",
                desc: "Supported and developed corporate volunteers across partnership activities",
                lat: 52.60261,
                lng: -1.99968
            },
            {
                label: "Partnership Management",
                stat: "Multi-site",
                desc: "Stakeholder management across all levels, budgeting and financial reconciliation across partnership activities",
                lat: 52.34631,
                lng: -0.19882
            },
            {
                label: "Engagement Strategy",
                stat: "Strategic",
                desc: "Internal perception survey on volunteering and WASH awareness used to shape engagement strategy and future partnership development",
                lat: 51.48559,
                lng: -0.11861
            },
            {
                label: "Technical Exchange",
                stat: "Africa",
                desc: "Facilitated technical knowledge exchange between UK water companies and water enterprises in developing countries (Mozambique TBC)",
                lat: -18.6657,
                lng: 35.5296
            }
            ]
        }, // end role: wateraid-wipo
        // ── END ROLE ─────────────────────────────────────────────────────
        // ── ROLE: Society for the Environment - Insight & Engagement Officer ──
        {
            id: "socenv",
            title: "Insight & Engagement Officer",
            org: "Society for the Environment",
            logo: "images/society_for_the_environment_logo.jpg",
            center: [52.4068, -1.5197],
            zoom: 8,
            start: "2016-06",
            end: "2017-06",
            location: "west-midlands-area",
            tier: "deployed",
            summary: "Policy, advocacy and engagement role focused on environmental accreditation and evidence-based policy. Worked across national government, European institutions and professional networks to influence post-EU Exit environmental standards.",
            achievements: [
                {
                    label: "Government Inquiry Evidence",
                    stat: "DEFRA Referenced",
                    desc: "Produced white papers and evidence submissions to government inquiries, referenced in official reports by DEFRA and the Department for Science",
                    lat: 51.4978,
                    lng: -0.1301
                },
                {
                    label: "Ministerial Engagement",
                    stat: "National",
                    desc: "Engaged with Ministers, Lords and senior Civil Servants to advocate for maintaining and strengthening EU environmental standards post-EU Exit",
                    lat: 51.4994,
                    lng: -0.1248
                },
                {
                    label: "EU Policy & Secretariat",
                    stat: "European",
                    desc: "Secretariat support and evidence-based environmental policy development for the European Network of Environmental Professionals",
                    lat: 50.8466,
                    lng: 4.3776
                },
                {
                    label: "Global Professional Survey",
                    stat: "Worldwide",
                    desc: "Designed and delivered global survey of chartered environmental professionals to evidence the value of accreditation and capture post-EU Exit policy priorities. Responses received from across the world including significant engagement from Asia.",
                    lat: 52.4068,
                    lng: -1.5197
                }
            ]
        }, // end role: socenv
        // ── END ROLE ─────────────────────────────────────────────────────
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