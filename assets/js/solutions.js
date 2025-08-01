const partnersData = {
    sika: {
    name: "Sika Construction Chemicals",
    description: "World leader in construction chemicals and industrial manufacturing.",
    logo: "https://www.sika.com/content/dam/dms/sika/images-3/logo/sika-logo.png",
    solutions: {
        // 1. Concrete Admixtures
concreteAdmixtures: {
    name: "Concrete Admixtures",
    description: "Innovative admixtures for enhanced concrete performance in all construction applications",
    products: {
        "sikament-nng": { // c1
            name: "Sikament® NNG",
            images: ["assets/sika/ConcreteAdmixtures/c1.png"],
            description: "Superplasticizer/high range water-reducer for free flowing and high strength concrete, especially effective in hot climates.",
            features: [
                "Up to 25% water reduction",
                "Excellent slump retention",
                "Improved workability and placement",
                "Enhanced final strengths",
                "Reduced permeability",
                "Chloride-free formulation"
            ],
            applications: [
                "High fluidity concrete",
                "Precast concrete elements",
                "Long transportation/delayed placing",
                "High temperature applications",
                "Densely reinforced structures"
            ],
            packaging: "1000 L flowbin, 200 L drum, 20 L jerrican",
            color: "Dark brown liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c1.pdf"
        },
        "sika-visco-crete-20-he": { // c2
            name: "Sika® ViscoCrete®-20 HE",
            images: ["assets/sika/ConcreteAdmixtures/c2.png"],
            description: "High range water reducer/superplasticizer for concrete requiring high early strength and flowability in tropical climates.",
            features: [
                "High water reduction (up to 30%)",
                "Accelerated strength development",
                "Improved flowability and compaction",
                "Reduced shrinkage and creep",
                "Enhanced surface finish",
                "ASTM C494 Type G compliant"
            ],
            applications: [
                "Precast concrete production",
                "Fast-track construction",
                "Self-compacting concrete (SCC)",
                "Early formwork removal",
                "Hot weather concreting"
            ],
            packaging: "1000 L flowbin, bulk tankers available",
            color: "Light brown liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c2.pdf"
        },
        "sika-visco-crete-90-he": { // c3
            name: "Sika® ViscoCrete®-90 HE",
            images: ["assets/sika/ConcreteAdmixtures/c3.png"],
            description: "Third generation accelerated superplasticizer for precast concrete with powerful water reduction and excellent flowability.",
            features: [
                "Extremely high water reduction",
                "Excellent early strength development",
                "Improved freeze-thaw resistance",
                "Reduced energy for steam curing",
                "EN 934-2 compliant",
                "Chloride and alkali free"
            ],
            applications: [
                "Precast concrete elements",
                "SCC applications",
                "Road and runway repairs",
                "Architectural concrete",
                "High-performance concrete"
            ],
            packaging: "200 L drums, 1000 L IBCs",
            color: "Light yellowish liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c3.pdf"
        },
        "sika-visco-crete-3088": { // c4
            name: "Sika® ViscoCrete®-3088",
            images: ["assets/sika/ConcreteAdmixtures/c4.png"],
            description: "High range water reducing admixture with retarding properties for extended workability and long transport times.",
            features: [
                "Up to 30% water reduction",
                "Extended workability retention",
                "Improved concrete density",
                "Reduced carbonation rate",
                "EN 934-2 compliant",
                "Non-corrosive to reinforcement"
            ],
            applications: [
                "Ready-mix concrete",
                "Hot weather concreting",
                "High fines concrete",
                "Reactive cement mixes",
                "Long haul deliveries"
            ],
            packaging: "25 L plastic, 200 L metal, 1000 L IBC",
            color: "Yellowish liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c4.pdf"
        },
        "sika-paver-2-hc-ke": { // c5
            name: "SikaPaver®-2 HC KE",
            images: ["assets/sika/ConcreteAdmixtures/c5.png"],
            description: "High performance compaction aid for semi-dry/no-slump concrete products requiring instant demolding.",
            features: [
                "Improved mold filling",
                "Enhanced surface finish",
                "Increased green strength",
                "Reduced product variation",
                "EN 934-2 compliant",
                "Optimized compaction process"
            ],
            applications: [
                "Concrete paving blocks",
                "Kerbstones and edgings",
                "Building blocks/bricks",
                "Concrete pipes/manholes",
                "Landscape products"
            ],
            packaging: "5 L, 25 L jerricans, 200 L drums, 1000 L IBCs",
            color: "Clear liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c5.pdf"
        },
        "sika-fiber": { // c6
            name: "Sika Fiber®",
            images: ["assets/sika/ConcreteAdmixtures/c6.png"],
            description: "Monofilament polypropylene fibers for reducing plastic shrinkage cracking and enhancing concrete durability.",
            features: [
                "Reduces plastic shrinkage cracks",
                "Improves freeze-thaw resistance",
                "Reduces explosive spalling in fire",
                "ASTM C-1116 compliant",
                "Available in multiple lengths",
                "Non-corrosive and alkali resistant"
            ],
            applications: [
                "Industrial floor slabs",
                "Water retaining structures",
                "Precast concrete elements",
                "Shotcrete applications",
                "Bridge decks"
            ],
            packaging: "0.9 kg bags (1m³ dosage), 20-500 kg bulk boxes",
            color: "Natural polypropylene",
            specSheet: "assets/sika/ConcreteAdmixtures/c6.pdf"
        },
        "sika-antisol-wb": { // c7
            name: "Sika® Antisol® WB",
            images: ["assets/sika/ConcreteAdmixtures/c7.png"],
            description: "Water-based curing compound, primer and sealer for freshly laid concrete in hot climates.",
            features: [
                "Reduces plastic cracking",
                "ASTM C 309 Type 1 compliant",
                "Non-flammable and non-toxic",
                "Acts as primer for coatings",
                "Reduces dusting and water loss",
                "Improves surface hardness"
            ],
            applications: [
                "Highways and runways",
                "Pre-stressed beams",
                "Irrigation channels",
                "Roof decks",
                "Architectural concrete"
            ],
            packaging: "20 L cans, 200 L drums",
            color: "White milky liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c7.pdf"
        },
        "sika-separol-gu": { // c8
            name: "Sika® Separol® GU",
            images: ["assets/sika/ConcreteAdmixtures/c8.png"],
            description: "Oil-based form release agent for clean demolding and high-quality concrete surface finishes.",
            features: [
                "Suitable for all formwork materials",
                "Easy clean striking",
                "Improved surface finish",
                "Reduces concrete contamination",
                "Economical coverage rates",
                "Non-staining"
            ],
            applications: [
                "Architectural concrete",
                "Precast elements",
                "Tilt-up construction",
                "Bridge components",
                "All formwork types"
            ],
            packaging: "25 L, 200 L drums, 1000 L IBC",
            color: "Brownish yellow liquid",
            specSheet: "assets/sika/ConcreteAdmixtures/c8.pdf"
        },
        "sikacontrol-110-wt-ke": { // c9
            name: "SikaControl®-110 WT KE",
            images: ["assets/sika/ConcreteAdmixtures/c9.png"],
            description: "Liquid mass water repellent that forms crystallization to waterproof concrete structures.",
            features: [
                "Forms waterproof crystallization",
                "Chloride-free formulation",
                "No impact on setting time",
                "Resists aggressive waters",
                "EN 934-2 compliant",
                "Improves durability"
            ],
            applications: [
                "Foundations and rafts",
                "Water tanks",
                "Marine structures",
                "Selenite-resistant concrete",
                "Industrial water containment"
            ],
            packaging: "5 L, 20 L jerricans, 200 L drums",
            color: "Milky white/pale brown",
            specSheet: "assets/sika/ConcreteAdmixtures/c9.pdf"
        }
    }
},

       // 2. Waterproofing
waterproofing: {
    name: "Waterproofing Solutions",
    description: "Comprehensive waterproofing systems for all construction needs",
    products: {
        "sikalite": {
            name: "Sikalite®",
            images: ["assets/sika/WaterproofingSolutions/w1.png"],
            description: "Powdered waterproofing admixture for mortar that blocks capillaries and pores in Portland cement/sand mortars preventing moisture movement.",
            features: [
                "Easy to use",
                "Economical",
                "Convenient powdered form",
                "Watertight but vapour permeable",
                "Chloride free"
            ],
            applications: [
                "Walls",
                "Facades",
                "Floor toppings",
                "Jointing mortars"
            ],
            packaging: "1, 25 and 200kg",
            color: "Beige powder",
            specSheet: "assets/sika/WaterproofingSolutions/w1.pdf"
        },
        "sika-cemflex": {
            name: "Sika® Cemflex®",
            images: ["assets/sika/WaterproofingSolutions/w2.png"],
            description: "Universal waterproofing and bonding agent that improves water resistance and adhesion of Portland cement based composites.",
            features: [
                "Watertight",
                "Ideal for submerged applications",
                "Good abrasion resistance",
                "Non-toxic",
                "Oil resistant",
                "UV stable"
            ],
            applications: [
                "Reservoirs",
                "Shower floors and walls",
                "Balcony and veranda floors",
                "Retaining walls",
                "Plaster and render bonding"
            ],
            packaging: "5, 25, 200 and 1000L containers",
            color: "Off white (Pale Grey)",
            specSheet: "assets/sika/WaterproofingSolutions/w2.pdf"
        },
        "sikatop-105-seal-ke": {
            name: "SikaTop®-105 Seal KE",
            images: ["assets/sika/WaterproofingSolutions/w3.png"],
            description: "Cement based, polymer modified, 2-component multipurpose waterproofing slurry with crystallization action and pore blocking effect.",
            features: [
                "Impermeable",
                "Brush, trowel or spray applied",
                "Good adhesion to substrates",
                "Pre-batched components",
                "Works against positive/negative water pressure"
            ],
            applications: [
                "Concrete water works",
                "Balconies and bathrooms",
                "Basements and cellars",
                "Waterproofing of concrete structures"
            ],
            packaging: "25 kg units (5 kg pails + 20 kg bags)",
            color: "Component A: White liquid, Component B: Grey powder",
            specSheet: "assets/sika/WaterproofingSolutions/w3.pdf"
        },
        "sikatop-seal-107-ke": {
            name: "SikaTop® Seal-107 KE",
            images: ["assets/sika/WaterproofingSolutions/w4.png"],
            description: "Two part polymer modified cementitious waterproof mortar slurry that is slightly flexible to tolerate fine cracks.",
            features: [
                "Easy to apply by brush or trowel",
                "No water required",
                "Very good adhesion",
                "Protects against water penetration",
                "Non-corrosive to steel",
                "Overpaintable"
            ],
            applications: [
                "Water tanks and hydraulic structures",
                "Basements in new construction",
                "Terraces and balconies",
                "Swimming pools and fountains",
                "Bathrooms and lift pits"
            ],
            packaging: "25 kg units (20 kg bag + 5 kg pail)",
            color: "Component A: White liquid, Component B: Grey powder",
            specSheet: "assets/sika/WaterproofingSolutions/w4.pdf"
        },
        "sikatop-130-flex-ke": {
            name: "SikaTop®-130 Flex KE",
            images: ["assets/sika/WaterproofingSolutions/w5.png"],
            description: "2-component flexible waterproofing mortar with selected aggregates and modified polymers for surfaces requiring crack bridging.",
            features: [
                "Waterproof and water vapour permeable",
                "Good crack bridging properties",
                "Low modulus of elasticity",
                "Excellent adhesion",
                "Resistant to de-icing salts",
                "Approved for drinking water contact"
            ],
            applications: [
                "Basements and underground walls",
                "Swimming pools and water tanks",
                "Marine environments",
                "Bridges and terraces",
                "Surfaces exposed to frost"
            ],
            packaging: "20 kg units (5 kg comp. A + 15 kg comp. B)",
            color: "Component A: White liquid, Component B: Grey powder",
            specSheet: "assets/sika/WaterproofingSolutions/w5.pdf"
        },
        "sikabit-pro-p45": {
            name: "SikaBit® PRO P-45 G-0 MG",
            images: ["assets/sika/WaterproofingSolutions/w6.png"],
            description: "APP modified, bituminous, torch-applied waterproofing membrane reinforced with non-woven polyester.",
            features: [
                "Good watertightness",
                "Excellent elongation",
                "Cold flexible",
                "Good mechanical properties",
                "Easy torch installation",
                "Mineral granule surface"
            ],
            applications: [
                "Retaining walls and basements",
                "Flat roofs and terraces",
                "Underground car parks",
                "Raft slabs",
                "Wet areas"
            ],
            packaging: "10m × 1m rolls (~45 kg)",
            color: "Mineral granule top, Polyethylene backing",
            specSheet: "assets/sika/WaterproofingSolutions/w6.pdf"
        },
        "sika-wp-shield-primer": {
            name: "Sika® WP Shield Primer",
            images: ["assets/sika/WaterproofingSolutions/w7.png"],
            description: "Water based modified bituminous primer for improved adhesion of bituminous sheet membranes.",
            features: [
                "Bonds well with old bituminous substrates",
                "Excellent concrete adhesion",
                "Easy brush, spray or roller application",
                "Specially designed for tropical conditions",
                "Surface activator for membranes"
            ],
            applications: [
                "Primer for torch-on membranes",
                "Primer for stick-on membranes",
                "Surface preparation for waterproofing"
            ],
            packaging: "20 kg metal drum",
            color: "Black/Brown",
            specSheet: "assets/sika/WaterproofingSolutions/w7.pdf"
        },
        "sika-waterbar-dr-eg": {
            name: "Sika Waterbar® DR EG",
            images: ["assets/sika/WaterproofingSolutions/w8.png"],
            description: "PVC-P external waterbars for sealing expansion joints in watertight concrete structures.",
            features: [
                "High tensile strength and elongation",
                "Permanent flexibility",
                "Resists medium hydrostatic pressure",
                "Resistant to aggressive ground conditions",
                "Weldable for continuous protection"
            ],
            applications: [
                "Joint sealing in concrete structures",
                "Residential/commercial basements",
                "Underground car parks",
                "Water containment structures"
            ],
            packaging: "15m standard rolls",
            color: "Yellow",
            specSheet: "assets/sika/WaterproofingSolutions/w8.pdf"
        },
        "sika-raintite": {
            name: "Sika® RainTite",
            images: ["assets/sika/WaterproofingSolutions/w9.png"],
            description: "Acrylic waterproofing system combining flexible UV-resistant emulsion with polyester membrane.",
            features: [
                "External weather & UV resistant",
                "Excellent adhesion",
                "High flexibility",
                "Non-toxic",
                "Fungal growth resistant",
                "Available in multiple colors"
            ],
            applications: [
                "Concrete sloped roofs",
                "Parapet walls",
                "External walls",
                "Sealing joints and roofing screws",
                "Various roof types"
            ],
            packaging: "1 kg, 4 kg, 20 kg pails",
            color: "Transparent, White, Ivory, Grey, Stone Grey, Green, Cream, Red",
            specSheet: "assets/sika/WaterproofingSolutions/w9.pdf"
        },
        "sika-raintite-plus": {
            name: "Sika® RainTite Plus",
            images: ["assets/sika/WaterproofingSolutions/w10.png"],
            description: "Enhanced acrylic waterproofing system with improved UV resistance and flexibility for demanding applications.",
            features: [
                "Advanced UV resistance",
                "Higher flexibility than standard RainTite",
                "Seamless membrane application",
                "Non-toxic and environmentally friendly",
                "Available in 8 standard colors",
                "3000+ hours artificial weathering resistance"
            ],
            applications: [
                "High-performance roof waterproofing",
                "Architectural feature protection",
                "Historic building preservation",
                "Extreme climate applications",
                "Solar panel roof integration"
            ],
            packaging: "1 kg, 4 kg, 20 kg pails",
            color: "Transparent, White, Ivory, Grey, Stone Grey, Green, Cream, Red",
            specSheet: "assets/sika/WaterproofingSolutions/w10.pdf"
        },
        "sikaswell-s2": {
            name: "SikaSwell® S-2",
            images: ["assets/sika/WaterproofingSolutions/w11.png"],
            description: "Polyurethane hydrophilic swellable sealant that expands in contact with water to seal construction joints and penetrations.",
            features: [
                "1-part, easy application",
                "Highly economical sealing solution",
                "Optimized expansion rate",
                "Permanently water resistant",
                "Good adhesion to various substrates",
                "No damage to fresh concrete"
            ],
            applications: [
                "Construction joint sealing",
                "Pipe and steel penetrations",
                "Cable duct joints",
                "Fixing swellable profiles",
                "Basement waterproofing details"
            ],
            packaging: "300 ml cartridges (12/box), 600 ml unipacs (20/box)",
            color: "Gray",
            specSheet: "assets/sika/WaterproofingSolutions/w11.pdf"
        },
        "sikalastic-560-gcc": {
            name: "Sikalastic®-560 GCC",
            images: ["assets/sika/WaterproofingSolutions/w12.png"],
            description: "Eco-friendly liquid applied roof waterproofing solution based on Sika Co-Elastic Technology (CET) for hot climates.",
            features: [
                "Highly elastic and crack-bridging",
                "UV resistant and weatherproof",
                "Water-based and VOC compliant",
                "Cold-applied (no heat/flame required)",
                "LEED and Estidama compliant",
                "Solar reflective (SRI ≥ 90)"
            ],
            applications: [
                "Exposed roof waterproofing",
                "Complex geometry roofs",
                "Roof life extension",
                "Energy efficient cool roofs",
                "Sustainable building projects"
            ],
            packaging: "20 kg and 25 kg plastic pails",
            color: "White and Grey",
            specSheet: "assets/sika/WaterproofingSolutions/w12.pdf"
        }
    }
},
// 7. Repair and Protection
repairAndProtection: {
    name: "Repair and Protection",
    description: "Comprehensive solutions for concrete repair, structural strengthening, and surface protection",
    products: {
        "sikalatex": { // rep1
            name: "SikaLatex®",
            images: ["assets/sika/RepairandProtection/rep1.png"],
            description: "Synthetic rubber emulsion used as admixture for cementitious bonding bridges and high-quality site-mix mortars.",
            features: [
                "Increases adhesion strength",
                "Reduces shrinkage and cracking",
                "Improves abrasion resistance",
                "Low chloride content (<0.1%)",
                "Al Sa'fat certified (Dubai Green Building)",
                "Suitable for hot climates"
            ],
            applications: [
                "Patch repair mortars",
                "Tile adhesives and grouts",
                "Masonry mortars and renders",
                "Bonding bridges"
            ],
            packaging: "20L cans, 200L drums",
            color: "White liquid",
            specSheet: "assets/sika/RepairandProtection/rep1.pdf"
        },
        "sika-monotop-610": { // rep2
            name: "Sika MonoTop®-610",
            images: ["assets/sika/RepairandProtection/rep2.png"],
            description: "Cementitious bonding primer and reinforcement corrosion protection slurry containing silica fume.",
            features: [
                "Easy mix (just add water)",
                "Good chloride penetration resistance",
                "Brush or spray application",
                "2MPa tensile adhesion strength",
                "30MPa compressive strength (28 days)",
                "EN 1504-3 compliant"
            ],
            applications: [
                "Concrete repair systems",
                "Rebar corrosion protection",
                "Substrate preparation",
                "Structural repairs"
            ],
            packaging: "25kg bags",
            color: "Grey powder",
            specSheet: "assets/sika/RepairandProtection/rep2.pdf"
        },
        "sika-monotop-412s": { // rep3
            name: "Sika MonoTop®-412 S",
            images: ["assets/sika/RepairandProtection/rep3.png"],
            description: "Fiber-reinforced, low-shrinkage structural repair mortar meeting EN 1504-3 Class R4 requirements.",
            features: [
                "Up to 50mm application thickness",
                "A1 fire rating",
                "Sulfate resistant",
                "45MPa compressive strength",
                "No bonding primer required",
                "Machine/hand application"
            ],
            applications: [
                "Structural concrete repairs",
                "Spall/damage restoration",
                "Increasing bearing capacity",
                "Carbonated concrete replacement"
            ],
            packaging: "25kg bags",
            color: "Grey powder",
            specSheet: "assets/sika/RepairandProtection/rep3.pdf"
        },
        "sika-monotop-620": { // rep4
            name: "Sika MonoTop®-620",
            images: ["assets/sika/RepairandProtection/rep4.png"],
            description: "Polymer-modified surfacing mortar for pore sealing and levelling (EN 1504-3 Class R3).",
            features: [
                "1.5-5mm application thickness",
                "30-35MPa compressive strength",
                "Low shrinkage behavior",
                "A1 fire rating",
                "No primer required",
                "Vertical/horizontal application"
            ],
            applications: [
                "Concrete pore sealing",
                "Edge/joint restoration",
                "Honeycomb repair",
                "Thin-layer renders"
            ],
            packaging: "25kg bags",
            color: "Light grey powder",
            specSheet: "assets/sika/RepairandProtection/rep4.pdf"
        },
        "sikagrout-212": { // rep5
            name: "SikaGrout®-212",
            images: ["assets/sika/RepairandProtection/rep5.png"],
            description: "High-strength, shrinkage-compensated cementitious grout for general purpose applications.",
            features: [
                "Free-flowing consistency",
                "95MPa compressive strength",
                "No segregation/bleeding",
                "Pumpable",
                "Non-corrosive",
                "10-100mm thickness range"
            ],
            applications: [
                "Machine base plates",
                "Precast concrete bedding",
                "Post-installed rebar anchoring",
                "Void filling"
            ],
            packaging: "25kg bags",
            color: "Grey powder",
            specSheet: "assets/sika/RepairandProtection/rep5.pdf"
        },
        "sikagrout-217": { // rep6
            name: "SikaGrout®-217",
            images: ["assets/sika/RepairandProtection/rep6.png"],
            description: "High-performance grout for precision applications with controlled expansion system.",
            features: [
                "60MPa compressive strength",
                "Shrinkage-compensated",
                "Vibration resistant",
                "Chloride-free",
                "EN 1504-3 Class R4",
                "10-150mm thickness"
            ],
            applications: [
                "Turbine grouting",
                "Bridge bearing devices",
                "Rail anchoring",
                "Industrial equipment"
            ],
            packaging: "25kg bags",
            color: "Grey powder",
            specSheet: "assets/sika/RepairandProtection/rep6.pdf"
        },
        "sikagrout-340-ke": { // rep7
            name: "SikaGrout®-340 KE",
            images: ["assets/sika/RepairandProtection/rep7.png"],
            description: "High-strength engineering grout with 105MPa compressive strength and pumpability.",
            features: [
                "Early strength development",
                "300mm maximum thickness",
                "Shrinkage compensated",
                "No bleeding",
                "Long-distance pumping",
                "12% water mixing ratio"
            ],
            applications: [
                "Heavy equipment bases",
                "Precast concrete joints",
                "Post-installed anchors",
                "Structural repairs"
            ],
            packaging: "25kg bags",
            color: "Grey powder",
            specSheet: "assets/sika/RepairandProtection/rep7.pdf"
        },
        "sikadur-31-cf-slow": { // rep8
            name: "Sikadur®-31 CF Slow",
            images: ["assets/sika/RepairandProtection/rep8.png"],
            description: "Thixotropic epoxy adhesive for structural bonding and repairs in hot climates (25-45°C).",
            features: [
                "57MPa compressive strength",
                "Non-sag vertical application",
                "Shrinkage-free",
                "ASTM C881 Type I Grade 3",
                "Moisture tolerant",
                "Al Sa'fat certified"
            ],
            applications: [
                "Concrete element bonding",
                "Edge/corner repairs",
                "Crack sealing",
                "Structural strengthening"
            ],
            packaging: "0.8kg+0.4kg sets (8/box), 4kg+2kg, 8kg+4kg",
            color: "Component A: White, B: Black, Mixed: Grey",
            specSheet: "assets/sika/RepairandProtection/rep8.pdf"
        },
        "sikagard-pw": { // rep9
            name: "Sikagard® PW",
            images: ["assets/sika/RepairandProtection/rep9.png"],
            description: "Chemical-resistant epoxy coating for concrete and steel protection in aggressive environments.",
            features: [
                "Potable water contact approved",
                "High-build (200μm/layer)",
                "Sewage resistant",
                "Glossy easy-clean finish",
                "1.5MPa tensile adhesion",
                "Al Sa'fat certified"
            ],
            applications: [
                "Chemical storage tanks",
                "Food processing plants",
                "Sewage treatment",
                "Below-grade protection"
            ],
            packaging: "5.6kg+1.4kg, 11.2kg+2.8kg, 16kg+4kg sets",
            color: "Grey/white (custom colors available)",
            specSheet: "assets/sika/RepairandProtection/rep9.pdf"
        },
        "sikagard-701w": { // rep10
            name: "Sikagard®-701 W",
            images: ["assets/sika/RepairandProtection/rep10.png"],
            description: "Water-repellent micro-emulsion impregnation for mineral substrates.",
            features: [
                "Water-dilutable concentrate",
                "Maintains vapor permeability",
                "Reduces salt absorption",
                "Non-film forming",
                "Deep penetration",
                "Low VOC"
            ],
            applications: [
                "Concrete facade protection",
                "Natural stone preservation",
                "Brickwork water protection",
                "Mineral surface treatment"
            ],
            packaging: "5L cans, 20L cans, 200L drums, 1000L flowbins",
            color: "Colorless liquid",
            specSheet: "assets/sika/RepairandProtection/rep10.pdf"
        },
        "sika-injection-107": { // rep11
            name: "Sika® Injection-107",
            images: ["assets/sika/RepairandProtection/rep11.png"],
            description: "Polyurethane foaming injection resin for permanent watertight sealing of cracks.",
            features: [
                "1-component moisture-reactive",
                "22x expansion factor",
                ">10% elongation",
                "EN 1504-5 compliant",
                "0.3mm crack sealing",
                "Water-bearing crack repair"
            ],
            applications: [
                "Concrete crack injection",
                "Waterproof joint sealing",
                "Void filling",
                "Basement/tunnel repairs"
            ],
            packaging: "5.3kg, 10.6kg metal containers",
            color: "Yellowish resin",
            specSheet: "assets/sika/RepairandProtection/rep11.pdf"
        }
    }
},

        // 5. Building Finishing
buildingFinishing: {
  name: "Building Finishing",
  description: "Solutions for tile installation and finishing",
  products: {
    "sikaceram-105-porcelain-ke": {
      name: "SikaCeram®-105 Porcelain KE",
      images: [
        "assets/sika/BuildingFinishing/b1.png"
      ],
      description: "High performance polymer-modified, cement based, improved adhesive for ceramic and porcelain tiles.",
      features: [
        "Very good adhesion",
        "Good bond strengths",
        "Non-Toxic",
        "No vertical slip, high slump resistance and grab",
        "Suitable for all types of Ceramic and Porcelain tiles",
        "Easy to use with excellent workability and thixotropic consistency"
      ],
      applications: [
        "Bonding high absorption ceramic tiles, earthenware, extruded and refined porcelain tiles",
        "Bonding large size tiles used in industrial environment, wet areas, swimming pools, facades",
        "Bathrooms, kitchens, balconies, terraces, etc",
        "Indoor and outdoor application over concrete, cement mortars, bricks and plaster",
        "Horizontal and vertical areas",
        "Suitable for moisture tolerant natural stone",
        "Suitable to tile directly on various Sika waterproofing products"
      ],
      packaging: "20 Kg bag",
      color: "Grey Powder",
      specSheet: "assets/sika/BuildingFinishing/b1.pdf"
    },
    "sikaceram-tile-grout-ke": {
      name: "Sika®Ceram Tile Grout KE",
      images: [
        "assets/sika/BuildingFinishing/b2.png"
      ],
      description: "Cementitious grout filler for ceramic tile joints.",
      features: [
        "Non-shrink and no cracks",
        "Non-sag/ slump (thixotropic) application",
        "Water, mildew and mold resistant",
        "Increased strengths",
        "Mixes with water only and easy to apply",
        "Available in different colours (Grey, White, Beige, Brown Black, Ivory and APS)"
      ],
      applications: [
        "Grout for filling installed ceramic tile joints in bathrooms",
        "swimming pools, kitchens and all other similar applications."
      ],
      packaging: "3 kg bag",
      color: "Various (Powder)",
      specSheet: "assets/sika/BuildingFinishing/b2.pdf"
    },
    "sika-anchorfix-s": {
      name: "Sika AnchorFix® S",
      images: [
        "assets/sika/BuildingFinishing/b3.png"
      ],
      description: "Styrenated polyester based 2-component anchoring adhesive.",
      features: [
        "Fast curing",
        "Non-sag, even overhead",
        "ETA for anchoring in uncracked concrete",
        "Low wastage"
      ],
      applications: [
        "As a fast curing anchoring adhesive for all grades of rebars / reinforcing steel, threaded rods, bolts and special fastening systems in concrete, hollow and solid masonry, hard natural stone*, solid rock*"
      ],
      packaging: "300 ml standard cartridge",
      color: "Component A: white, Component B: black, Component A+B mixed: light grey",
      specSheet: "assets/sika/BuildingFinishing/b3.pdf"
    }
  }
},

// 6. Flooring Systems
flooringSystems: {
  name: "Flooring Systems",
  description: "Comprehensive flooring solutions for various applications.",
  products: {
    "sikafloor-3-quartztops": {
      name: "Sikafloor®-3 QuartzTop",
      images: [
        "assets/sika/FlooringSystems/f1.png"
      ],
      description: "One-part, pre-blended, mineral dry-shake hardener with optional colouring for concrete.",
      features: [
        "Medium wear resistance rating",
        "Good impact resistance",
        "Cost-effective surface hardener",
        "Dust-proof",
        "Fast application",
        "Easy to clean",
        "Quality-assured factory blending",
        "Wide range of colours available"
      ],
      applications: [
        "Mineral dry-shake topping for monolithic floors in industrial, commercial and public buildings"
      ],
      packaging: "25 kg",
      color: "Powder Natural (concrete grey). Other colours upon request.",
      specSheet: "assets/sika/FlooringSystems/f1.pdf"
    },
    "esd-flooring": {
      name: "ESD Flooring",
      images: [
        "assets/sika/FlooringSystems/f2.png"
      ],
      description: "Information about ESD (Electrostatic Discharge) flooring solutions.",
      features: [], // No specific features provided in the description
      applications: [], // No specific applications provided in the description
      packaging: "", // No packaging information provided in the description
      color: "", // No color information provided in the description
      specSheet: "assets/FlooringSystems/f2.pdf" // Assuming f2.pdf exists
    },
    "sikafloor-263-sl": {
      name: "Sikafloor®-263 SL",
      images: [
        "assets/sika/FlooringSystems/f3.png"
      ],
      description: "Two part self-smoothing, pigmented, epoxy resin for flooring application. Suitable for use in hot and tropical climatic conditions.",
      features: [
        "Highly fillable",
        "Good chemical and mechanical resistance",
        "Easy application",
        "Liquid proof",
        "Gloss finish",
        "Slip resistant surface possible"
      ],
      applications: [
        "Self-smoothing system for concrete and cement screeds with medium to heavy wear, e.g. for storage warehouses, assembly halls, maintenance workshops, garages and car parks, loading bays, aircraft hangars, plant rooms, clean rooms, production areas, dry food processing plants, pharmaceutical manufacturing"
      ],
      packaging: "Part A + B 20 kg or 25 kg ready to mix units (various sizes available)",
      color: "Resin - Part A Coloured, liquid; Hardener - Part B Transparent, liquid (various colour shades available)",
      specSheet: "assets/sika/FlooringSystems/f3.pdf"
    },
    "sikafloor-purcem-hm-20": {
      name: "Sikafloor® PurCem® HM-20",
      images: [
        "assets/sika/FlooringSystems/f4.png"
      ],
      description: "High strength-trowel grade, heavy duty polyurethane cement hybrid flooring system. Suitable for floors subject to heavy loading, abrasion and chemical exposure.",
      features: [
        "Good resistance to fire",
        "Steam cleanable at 9 mm thick",
        "High mechanical and abrasion resistance",
        "Easy to clean and maintain",
        "Seamless, non-taint, odourless",
        "Smooth, matt surface",
        "Tolerant to moisture in the substrate",
        "Very good life cycle cost performance",
        "High chemical resistance",
        "Easy application"
      ],
      applications: [
        "Chemical plants",
        "Laboratories",
        "Workshops",
        "Food processing plants, in wet or dry process areas, freezers and coolers, thermal shock areas"
      ],
      packaging: "Please refer to the individual Product Data Sheet",
      color: "Beige, maize yellow, oxide red, grass green, dusty grey, slate grey, traffic grey (Textured surface, matt finish)",
      specSheet: "assets/sika/FlooringSystems/f4.pdf"
    },
    "sika-ucrete-mf": {
      name: "Sika® Ucrete® MF",
      images: [
        "assets/sika/FlooringSystems/f5.png"
      ],
      description: "4-6mm Heavy duty polyurethane floor finish with exceptional resistance to aggressive chemicals. Provides a smooth protective floor finish suitable for applications in predominantly dry environments.",
      features: [
        "Exceptional resistance to aggressive chemicals",
        "Smooth protective floor finish",
        "Suitable for food, pharmaceutical and manufacturing industries",
        "Very low emissions (Indoor Air Comfort Gold Label)",
        "Resistant to liquid spillage up to 60°C",
        "Suitable for freezer temperatures down to -18°C",
        "Non-tainting",
        "High mechanical strengths and resilient to severe impact loads",
        "Zero absorption"
      ],
      applications: [
        "Food industry",
        "Pharmaceutical industry",
        "Manufacturing industries including clean rooms, laboratories, packing halls and warehouses"
      ],
      packaging: "Part A+B+C+D 20.28 kg/set (various components with different packaging sizes)",
      color: "Available in eight standard colours: Red, Yellow, Green, Orange, Grey, Cream, Blue and Green/Brown.",
      specSheet: "assets/sika/FlooringSystems/f5.pdf"
    }
  }
},
        // 6. Sealing and Bonding
sealingAndBonding: {
    name: "Sealing and Bonding",
    description: "High-performance sealants and adhesives for construction, industrial, and fire protection applications",
    products: {
        // Existing products (j1-j5)
        "sikaflex-construction": { // j1
            name: "Sikaflex® Construction",
            images: ["assets/sika/SealingAndBonding/j1.png"],
            description: "One-component, moisture-curing elastic joint sealant for movement and connection joints on porous substrates.",
            features: [
                "Fast-curing & bubble-free",
                "Non-sag application",
                "Overpaintable",
                "±25% movement capability",
                "ISO 11600 F 25 HM compliant",
                "Excellent weather resistance"
            ],
            applications: [
                "Building facade joints",
                "Door/window perimeters",
                "Concrete expansion joints",
                "Outdoor sealing applications"
            ],
            packaging: "600ml sausages (20/box)",
            color: "White, Concrete Grey",
            specSheet: "assets/sika/SealingAndBonding/j1.pdf"
        },
        "sikaflex-11-fc-purform": { // j2
            name: "Sikaflex®-11 FC Purform",
            images: ["assets/sika/SealingAndBonding/j2.png"],
            description: "Multipurpose elastic adhesive and joint sealant with very low monomer content (<0.1%) for interior/exterior use.",
            features: [
                "CE marked to EN 15651",
                "LEED v4 compliant",
                "Class A+ VOC emissions",
                "Bonds concrete/masonry/metal",
                "±25% movement capability",
                "No diisocyanate training required"
            ],
            applications: [
                "Bonding construction components",
                "Vertical/horizontal joint sealing",
                "Sanitary area joints",
                "Pedestrian walkways"
            ],
            packaging: "300ml cartridges (12/box), 600ml foil packs (20/box)",
            color: "White, black, grey, brown, beige",
            specSheet: "assets/sika/SealingAndBonding/j2.pdf"
        },
        "sikaflex-pro-3-purform": { // j3
            name: "Sikaflex® PRO-3 Purform®",
            images: ["assets/sika/SealingAndBonding/j3.png"],
            description: "Tamper-resistant polyurethane sealant for floor joints and civil engineering with ±25-50% movement capability.",
            features: [
                "Anti-pick/vandal-resistant",
                "ASTM C719 Class 50",
                "Chemical/weather resistant",
                "Bubble-free curing",
                "Food industry approved",
                "<0.1% monomer content"
            ],
            applications: [
                "Food processing floors",
                "Car park decks/tunnels",
                "Secure facilities (prisons)",
                "Wastewater treatment plants"
            ],
            packaging: "300ml cartridges (12/box), 600ml foil packs (20/box)",
            color: "Multiple colors available",
            specSheet: "assets/sika/SealingAndBonding/j3.pdf"
        },
        "sikaflex-tank-n": { // j4
            name: "Sikaflex® Tank N",
            images: ["assets/sika/SealingAndBonding/j4.png"],
            description: "Chemical-resistant elastic sealant for joints exposed to fuels, oils, and water-polluting liquids.",
            features: [
                "ETA-09/0272 approved",
                "Resists petrol/diesel/oils",
                "±25% movement capability",
                "LEED v3 compliant",
                "High mechanical resistance",
                "For professional use only"
            ],
            applications: [
                "Petrol station floors",
                "Chemical storage tanks",
                "Containment bunds",
                "Parking garage joints"
            ],
            packaging: "600ml foil packs (20/box)",
            color: "Concrete grey, black",
            specSheet: "assets/sika/SealingAndBonding/j4.pdf"
        },
        "sika-boom": { // j5
            name: "Sika Boom®",
            images: ["assets/sika/SealingAndBonding/j5.png"],
            description: "One-component polyurethane expanding foam for sealing gaps, cracks, and penetrations.",
            features: [
                "Expands 2-3x original size",
                "Tack-free in 5 minutes",
                "Sandable/paintable",
                "ASTM E84 fire rated",
                "Adheres to most materials",
                "-29°C to +93°C service range"
            ],
            applications: [
                "Utility panel sealing",
                "Pipe/duct penetrations",
                "Base plate insulation",
                "Exterior crack filling"
            ],
            packaging: "12oz cans (12/carton), 20oz cans (12/carton)",
            color: "Light yellow foam",
            specSheet: "assets/sika/SealingAndBonding/j5.pdf"
        },

        // New products (j6-j8)
        "sika-primer-3n": { // j6
            name: "Sika® Primer-3 N",
            images: ["assets/sika/SealingAndBonding/j6.png"],
            description: "Solvent-based primer for Sikaflex®, SikaHyflex®, and Sikasil® products on porous substrates.",
            features: [
                "Short flash-off time (<30 min)",
                "LEED® EQc 4.1 compliant",
                "VOC content <700 g/l",
                "Water repellent",
                "For concrete/GRC/metal",
                "Easy brush/roller application"
            ],
            applications: [
                "Pre-treatment for sealants",
                "Concrete/metal bonding prep",
                "GRP/GRC surface preparation",
                "Outdoor adhesive applications"
            ],
            packaging: "1L bottles (4/box)",
            color: "Transparent",
            specSheet: "assets/sika/SealingAndBonding/j6.pdf"
        },
        "sikaflex-406-kc": { // j7
            name: "Sikaflex®-406 KC",
            images: ["assets/sika/SealingAndBonding/j7.png"],
            description: "Self-leveling polyurethane sealant with booster accelerator for high-traffic joints.",
            features: [
                "±25% movement capability",
                "Traffic-ready in 3 hours",
                "Resists diesel/jet fuel",
                "CE marked to EN 15651-4",
                "i-Cure® booster technology",
                "For recessed/broadcast joints"
            ],
            applications: [
                "Rail track joints",
                "Airport pavements",
                "Road expansion joints",
                "Industrial flooring systems"
            ],
            packaging: "10L containers + 150ml booster packs (45/box)",
            color: "Black, concrete grey",
            specSheet: "assets/sika/SealingAndBonding/j7.pdf"
        },
        "sika-firestop": { // j8
            name: "Sika® FireStop",
            images: ["assets/sika/SealingAndBonding/j8.png"],
            description: "Intumescent inorganic silicate sealant for fire-rated joints and penetrations.",
            features: [
                "Withstands +1000°C",
                "BS 476 Part 4 compliant",
                "Expands at +250°C",
                "Non-combustible",
                "Fume-free in fire",
                "Shore D 50 hardness"
            ],
            applications: [
                "Fire door seals",
                "Chimney/stove pipe seals",
                "Safes/vault joints",
                "Ventilation fire barriers"
            ],
            packaging: "300ml cartridges",
            color: "Black",
            specSheet: "assets/sika/SealingAndBonding/j8.pdf"
        }
    }
},
    },

       allProducts: {
    // Concrete Admixtures
    "sikament-nng": {
        name: "Sikament® NNG",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c1.png"],
        description: "Superplasticizer/high range water-reducer for free flowing and high strength concrete, especially effective in hot climates.",
        features: [
            "Up to 25% water reduction",
            "Excellent slump retention",
            "Improved workability and placement",
            "Enhanced final strengths",
            "Reduced permeability",
            "Chloride-free formulation"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c1.pdf"
    },
    "sika-visco-crete-20-he": {
        name: "Sika® ViscoCrete®-20 HE",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c2.png"],
        description: "High range water reducer/superplasticizer for concrete requiring high early strength and flowability in tropical climates.",
        features: [
            "High water reduction (up to 30%)",
            "Accelerated strength development",
            "Improved flowability and compaction",
            "Reduced shrinkage and creep",
            "Enhanced surface finish",
            "ASTM C494 Type G compliant"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c2.pdf"
    },
    "sika-visco-crete-90-he": {
        name: "Sika® ViscoCrete®-90 HE",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c3.png"],
        description: "Third generation accelerated superplasticizer for precast concrete with powerful water reduction and excellent flowability.",
        features: [
            "Extremely high water reduction",
            "Excellent early strength development",
            "Improved freeze-thaw resistance",
            "Reduced energy for steam curing",
            "EN 934-2 compliant",
            "Chloride and alkali free"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c3.pdf"
    },
    "sika-visco-crete-3088": {
        name: "Sika® ViscoCrete®-3088",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c4.png"],
        description: "High range water reducing admixture with retarding properties for extended workability and long transport times.",
        features: [
            "Up to 30% water reduction",
            "Extended workability retention",
            "Improved concrete density",
            "Reduced carbonation rate",
            "EN 934-2 compliant",
            "Non-corrosive to reinforcement"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c4.pdf"
    },
    "sika-paver-2-hc-ke": {
        name: "SikaPaver®-2 HC KE",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c5.png"],
        description: "High performance compaction aid for semi-dry/no-slump concrete products requiring instant demolding.",
        features: [
            "Improved mold filling",
            "Enhanced surface finish",
            "Increased green strength",
            "Reduced product variation",
            "EN 934-2 compliant",
            "Optimized compaction process"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c5.pdf"
    },
    "sika-fiber": {
        name: "Sika Fiber®",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c6.png"],
        description: "Monofilament polypropylene fibers for reducing plastic shrinkage cracking and enhancing concrete durability.",
        features: [
            "Reduces plastic shrinkage cracks",
            "Improves freeze-thaw resistance",
            "Reduces explosive spalling in fire",
            "ASTM C-1116 compliant",
            "Available in multiple lengths",
            "Non-corrosive and alkali resistant"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c6.pdf"
    },
    "sika-antisol-wb": {
        name: "Sika® Antisol® WB",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c7.png"],
        description: "Water-based curing compound, primer and sealer for freshly laid concrete in hot climates.",
        features: [
            "Reduces plastic cracking",
            "ASTM C 309 Type 1 compliant",
            "Non-flammable and non-toxic",
            "Acts as primer for coatings",
            "Reduces dusting and water loss",
            "Improves surface hardness"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c7.pdf"
    },
    "sika-separol-gu": {
        name: "Sika® Separol® GU",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c8.png"],
        description: "Oil-based form release agent for clean demolding and high-quality concrete surface finishes.",
        features: [
            "Suitable for all formwork materials",
            "Easy clean striking",
            "Improved surface finish",
            "Reduces concrete contamination",
            "Economical coverage rates",
            "Non-staining"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c8.pdf"
    },
    "sikacontrol-110-wt-ke": {
        name: "SikaControl®-110 WT KE",
        solution: "Concrete Admixtures",
        images: ["assets/sika/ConcreteAdmixtures/c9.png"],
        description: "Liquid mass water repellent that forms crystallization to waterproof concrete structures.",
        features: [
            "Forms waterproof crystallization",
            "Chloride-free formulation",
            "No impact on setting time",
            "Resists aggressive waters",
            "EN 934-2 compliant",
            "Improves durability"
        ],
        specSheet: "assets/sika/ConcreteAdmixtures/c9.pdf"
    },

    // Waterproofing Solutions
    "sikalite": {
        name: "Sikalite®",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w1.png"],
        description: "Powdered waterproofing admixture for mortar that blocks capillaries and pores in Portland cement/sand mortars preventing moisture movement.",
        features: [
            "Easy to use",
            "Economical",
            "Convenient powdered form",
            "Watertight but vapour permeable",
            "Chloride free"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w1.pdf"
    },
    "sika-cemflex": {
        name: "Sika® Cemflex®",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w2.png"],
        description: "Universal waterproofing and bonding agent that improves water resistance and adhesion of Portland cement based composites.",
        features: [
            "Watertight",
            "Ideal for submerged applications",
            "Good abrasion resistance",
            "Non-toxic",
            "Oil resistant",
            "UV stable"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w2.pdf"
    },
    "sikatop-105-seal-ke": {
        name: "SikaTop®-105 Seal KE",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w3.png"],
        description: "Cement based, polymer modified, 2-component multipurpose waterproofing slurry with crystallization action and pore blocking effect.",
        features: [
            "Impermeable",
            "Brush, trowel or spray applied",
            "Good adhesion to substrates",
            "Pre-batched components",
            "Works against positive/negative water pressure"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w3.pdf"
    },
    "sikatop-seal-107-ke": {
        name: "SikaTop® Seal-107 KE",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w4.png"],
        description: "Two part polymer modified cementitious waterproof mortar slurry that is slightly flexible to tolerate fine cracks.",
        features: [
            "Easy to apply by brush or trowel",
            "No water required",
            "Very good adhesion",
            "Protects against water penetration",
            "Non-corrosive to steel",
            "Overpaintable"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w4.pdf"
    },
    "sikatop-130-flex-ke": {
        name: "SikaTop®-130 Flex KE",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w5.png"],
        description: "2-component flexible waterproofing mortar with selected aggregates and modified polymers for surfaces requiring crack bridging.",
        features: [
            "Waterproof and water vapour permeable",
            "Good crack bridging properties",
            "Low modulus of elasticity",
            "Excellent adhesion",
            "Resistant to de-icing salts",
            "Approved for drinking water contact"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w5.pdf"
    },
    "sikabit-pro-p45": {
        name: "SikaBit® PRO P-45 G-0 MG",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w6.png"],
        description: "APP modified, bituminous, torch-applied waterproofing membrane reinforced with non-woven polyester.",
        features: [
            "Good watertightness",
            "Excellent elongation",
            "Cold flexible",
            "Good mechanical properties",
            "Easy torch installation",
            "Mineral granule surface"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w6.pdf"
    },
    "sika-wp-shield-primer": {
        name: "Sika® WP Shield Primer",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w7.png"],
        description: "Water based modified bituminous primer for improved adhesion of bituminous sheet membranes.",
        features: [
            "Bonds well with old bituminous substrates",
            "Excellent concrete adhesion",
            "Easy brush, spray or roller application",
            "Specially designed for tropical conditions",
            "Surface activator for membranes"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w7.pdf"
    },
    "sika-waterbar-dr-eg": {
        name: "Sika Waterbar® DR EG",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w8.png"],
        description: "PVC-P external waterbars for sealing expansion joints in watertight concrete structures.",
        features: [
            "High tensile strength and elongation",
            "Permanent flexibility",
            "Resists medium hydrostatic pressure",
            "Resistant to aggressive ground conditions",
            "Weldable for continuous protection"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w8.pdf"
    },
    "sika-raintite": {
        name: "Sika® RainTite",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w9.png"],
        description: "Acrylic waterproofing system combining flexible UV-resistant emulsion with polyester membrane.",
        features: [
            "External weather & UV resistant",
            "Excellent adhesion",
            "High flexibility",
            "Non-toxic",
            "Fungal growth resistant",
            "Available in multiple colors"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w9.pdf"
    },
    "sika-raintite-plus": {
        name: "Sika® RainTite Plus",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w10.png"],
        description: "Enhanced acrylic waterproofing system with improved UV resistance and flexibility for demanding applications.",
        features: [
            "Advanced UV resistance",
            "Higher flexibility than standard RainTite",
            "Seamless membrane application",
            "Non-toxic and environmentally friendly",
            "Available in 8 standard colors",
            "3000+ hours artificial weathering resistance"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w10.pdf"
    },
    "sikaswell-s2": {
        name: "SikaSwell® S-2",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w11.png"],
        description: "Polyurethane hydrophilic swellable sealant that expands in contact with water to seal construction joints and penetrations.",
        features: [
            "1-part, easy application",
            "Highly economical sealing solution",
            "Optimized expansion rate",
            "Permanently water resistant",
            "Good adhesion to various substrates",
            "No damage to fresh concrete"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w11.pdf"
    },
    "sikalastic-560-gcc": {
        name: "Sikalastic®-560 GCC",
        solution: "Waterproofing Solutions",
        images: ["assets/sika/WaterproofingSolutions/w12.png"],
        description: "Eco-friendly liquid applied roof waterproofing solution based on Sika Co-Elastic Technology (CET) for hot climates.",
        features: [
            "Highly elastic and crack-bridging",
            "UV resistant and weatherproof",
            "Water-based and VOC compliant",
            "Cold-applied (no heat/flame required)",
            "LEED and Estidama compliant",
            "Solar reflective (SRI ≥ 90)"
        ],
        specSheet: "assets/sika/WaterproofingSolutions/w12.pdf"
    },

    // Repair and Protection
    "sikalatex": {
        name: "SikaLatex®",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep1.png"],
        description: "Synthetic rubber emulsion used as admixture for cementitious bonding bridges and high-quality site-mix mortars.",
        features: [
            "Increases adhesion strength",
            "Reduces shrinkage and cracking",
            "Improves abrasion resistance",
            "Low chloride content (<0.1%)",
            "Al Sa'fat certified (Dubai Green Building)",
            "Suitable for hot climates"
        ],
        specSheet: "assets/sika/RepairandProtection/rep1.pdf"
    },
    "sika-monotop-610": {
        name: "Sika MonoTop®-610",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep2.png"],
        description: "Cementitious bonding primer and reinforcement corrosion protection slurry containing silica fume.",
        features: [
            "Easy mix (just add water)",
            "Good chloride penetration resistance",
            "Brush or spray application",
            "2MPa tensile adhesion strength",
            "30MPa compressive strength (28 days)",
            "EN 1504-3 compliant"
        ],
        specSheet: "assets/sika/RepairandProtection/rep2.pdf"
    },
    "sika-monotop-412s": {
        name: "Sika MonoTop®-412 S",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep3.png"],
        description: "Fiber-reinforced, low-shrinkage structural repair mortar meeting EN 1504-3 Class R4 requirements.",
        features: [
            "Up to 50mm application thickness",
            "A1 fire rating",
            "Sulfate resistant",
            "45MPa compressive strength",
            "No bonding primer required",
            "Machine/hand application"
        ],
        specSheet: "assets/sika/RepairandProtection/rep3.pdf"
    },
    "sika-monotop-620": {
        name: "Sika MonoTop®-620",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep4.png"],
        description: "Polymer-modified surfacing mortar for pore sealing and levelling (EN 1504-3 Class R3).",
        features: [
            "1.5-5mm application thickness",
            "30-35MPa compressive strength",
            "Low shrinkage behavior",
            "A1 fire rating",
            "No primer required",
            "Vertical/horizontal application"
        ],
        specSheet: "assets/sika/RepairandProtection/rep4.pdf"
    },
    "sikagrout-212": {
        name: "SikaGrout®-212",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep5.png"],
        description: "High-strength, shrinkage-compensated cementitious grout for general purpose applications.",
        features: [
            "Free-flowing consistency",
            "95MPa compressive strength",
            "No segregation/bleeding",
            "Pumpable",
            "Non-corrosive",
            "10-100mm thickness range"
        ],
        specSheet: "assets/sika/RepairandProtection/rep5.pdf"
    },
    "sikagrout-217": {
        name: "SikaGrout®-217",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep6.png"],
        description: "High-performance grout for precision applications with controlled expansion system.",
        features: [
            "60MPa compressive strength",
            "Shrinkage-compensated",
            "Vibration resistant",
            "Chloride-free",
            "EN 1504-3 Class R4",
            "10-150mm thickness"
        ],
        specSheet: "assets/sika/RepairandProtection/rep6.pdf"
    },
    "sikagrout-340-ke": {
        name: "SikaGrout®-340 KE",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep7.png"],
        description: "High-strength engineering grout with 105MPa compressive strength and pumpability.",
        features: [
            "Early strength development",
            "300mm maximum thickness",
            "Shrinkage compensated",
            "No bleeding",
            "Long-distance pumping",
            "12% water mixing ratio"
        ],
        specSheet: "assets/sika/RepairandProtection/rep7.pdf"
    },
    "sikadur-31-cf-slow": {
        name: "Sikadur®-31 CF Slow",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep8.png"],
        description: "Thixotropic epoxy adhesive for structural bonding and repairs in hot climates (25-45°C).",
        features: [
            "57MPa compressive strength",
            "Non-sag vertical application",
            "Shrinkage-free",
            "ASTM C881 Type I Grade 3",
            "Moisture tolerant",
            "Al Sa'fat certified"
        ],
        specSheet: "assets/sika/RepairandProtection/rep8.pdf"
    },
    "sikagard-pw": {
        name: "Sikagard® PW",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep9.png"],
        description: "Chemical-resistant epoxy coating for concrete and steel protection in aggressive environments.",
        features: [
            "Potable water contact approved",
            "High-build (200μm/layer)",
            "Sewage resistant",
            "Glossy easy-clean finish",
            "1.5MPa tensile adhesion",
            "Al Sa'fat certified"
        ],
        specSheet: "assets/sika/RepairandProtection/rep9.pdf"
    },
    "sikagard-701w": {
        name: "Sikagard®-701 W",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep10.png"],
        description: "Water-repellent micro-emulsion impregnation for mineral substrates.",
        features: [
            "Water-dilutable concentrate",
            "Maintains vapor permeability",
            "Reduces salt absorption",
            "Non-film forming",
            "Deep penetration",
            "Low VOC"
        ],
        specSheet: "assets/sika/RepairandProtection/rep10.pdf"
    },
    "sika-injection-107": {
        name: "Sika® Injection-107",
        solution: "Repair and Protection",
        images: ["assets/sika/RepairandProtection/rep11.png"],
        description: "Polyurethane foaming injection resin for permanent watertight sealing of cracks.",
        features: [
            "1-component moisture-reactive",
            "22x expansion factor",
            ">10% elongation",
            "EN 1504-5 compliant",
            "0.3mm crack sealing",
            "Water-bearing crack repair"
        ],
        specSheet: "assets/sika/RepairandProtection/rep11.pdf"
    },

    // Building Finishing
    "sikaceram-105-porcelain-ke": {
        name: "SikaCeram®-105 Porcelain KE",
        solution: "Building Finishing",
        images: ["assets/sika/BuildingFinishing/b1.png"],
        description: "High performance polymer-modified, cement based, improved adhesive for ceramic and porcelain tiles.",
        features: [
            "Very good adhesion",
            "Good bond strengths",
            "Non-Toxic",
            "No vertical slip, high slump resistance and grab",
            "Suitable for all types of Ceramic and Porcelain tiles",
            "Easy to use with excellent workability and thixotropic consistency"
        ],
        specSheet: "assets/sika/BuildingFinishing/b1.pdf"
    },
    "sikaceram-tile-grout-ke": {
        name: "Sika®Ceram Tile Grout KE",
        solution: "Building Finishing",
        images: ["assets/sika/BuildingFinishing/b2.png"],
        description: "Cementitious grout filler for ceramic tile joints.",
        features: [
            "Non-shrink and no cracks",
            "Non-sag/ slump (thixotropic) application",
            "Water, mildew and mold resistant",
            "Increased strengths",
            "Mixes with water only and easy to apply",
            "Available in different colours"
        ],
        specSheet: "assets/sika/BuildingFinishing/b2.pdf"
    },
    "sika-anchorfix-s": {
        name: "Sika AnchorFix® S",
        solution: "Building Finishing",
        images: ["assets/sika/BuildingFinishing/b3.png"],
        description: "Styrenated polyester based 2-component anchoring adhesive.",
        features: [
            "Fast curing",
            "Non-sag, even overhead",
            "ETA for anchoring in uncracked concrete",
            "Low wastage"
        ],
        specSheet: "assets/sika/BuildingFinishing/b3.pdf"
    },

    // Flooring Systems
    "sikafloor-3-quartztops": {
        name: "Sikafloor®-3 QuartzTop",
        solution: "Flooring Systems",
        images: ["assets/sika/FlooringSystems/f1.png"],
        description: "One-part, pre-blended, mineral dry-shake hardener with optional colouring for concrete.",
        features: [
            "Medium wear resistance rating",
            "Good impact resistance",
            "Cost-effective surface hardener",
            "Dust-proof",
            "Fast application",
            "Easy to clean",
            "Quality-assured factory blending",
            "Wide range of colours available"
        ],
        specSheet: "assets/sika/FlooringSystems/f1.pdf"
    },
    "esd-flooring": {
        name: "ESD Flooring",
        solution: "Flooring Systems",
        images: ["assets/sika/FlooringSystems/f2.png"],
        description: "Information about ESD (Electrostatic Discharge) flooring solutions.",
        features: [],
        specSheet: "assets/FlooringSystems/f2.pdf"
    },
    "sikafloor-263-sl": {
        name: "Sikafloor®-263 SL",
        solution: "Flooring Systems",
        images: ["assets/sika/FlooringSystems/f3.png"],
        description: "Two part self-smoothing, pigmented, epoxy resin for flooring application. Suitable for use in hot and tropical climatic conditions.",
        features: [
            "Highly fillable",
            "Good chemical and mechanical resistance",
            "Easy application",
            "Liquid proof",
            "Gloss finish",
            "Slip resistant surface possible"
        ],
        specSheet: "assets/sika/FlooringSystems/f3.pdf"
    },
    "sikafloor-purcem-hm-20": {
        name: "Sikafloor® PurCem® HM-20",
        solution: "Flooring Systems",
        images: ["assets/sika/FlooringSystems/f4.png"],
        description: "High strength-trowel grade, heavy duty polyurethane cement hybrid flooring system. Suitable for floors subject to heavy loading, abrasion and chemical exposure.",
        features: [
            "Good resistance to fire",
            "Steam cleanable at 9 mm thick",
            "High mechanical and abrasion resistance",
            "Easy to clean and maintain",
            "Seamless, non-taint, odourless",
            "Smooth, matt surface",
            "Tolerant to moisture in the substrate",
            "Very good life cycle cost performance",
            "High chemical resistance",
            "Easy application"
        ],
        specSheet: "assets/sika/FlooringSystems/f4.pdf"
    },
    "sika-ucrete-mf": {
        name: "Sika® Ucrete® MF",
        solution: "Flooring Systems",
        images: ["assets/sika/FlooringSystems/f5.png"],
        description: "4-6mm Heavy duty polyurethane floor finish with exceptional resistance to aggressive chemicals. Provides a smooth protective floor finish suitable for applications in predominantly dry environments.",
        features: [
            "Exceptional resistance to aggressive chemicals",
            "Smooth protective floor finish",
            "Suitable for food, pharmaceutical and manufacturing industries",
            "Very low emissions (Indoor Air Comfort Gold Label)",
            "Resistant to liquid spillage up to 60°C",
            "Suitable for freezer temperatures down to -18°C",
            "Non-tainting",
            "High mechanical strengths and resilient to severe impact loads",
            "Zero absorption"
        ],
        specSheet: "assets/sika/FlooringSystems/f5.pdf"
    },

    // Sealing and Bonding
    "sikaflex-construction": {
        name: "Sikaflex® Construction",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j1.png"],
        description: "One-component, moisture-curing elastic joint sealant for movement and connection joints on porous substrates.",
        features: [
            "Fast-curing & bubble-free",
            "Non-sag application",
            "Overpaintable",
            "±25% movement capability",
            "ISO 11600 F 25 HM compliant",
            "Excellent weather resistance"
        ],
        specSheet: "assets/sika/SealingAndBonding/j1.pdf"
    },
    "sikaflex-11-fc-purform": {
        name: "Sikaflex®-11 FC Purform",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j2.png"],
        description: "Multipurpose elastic adhesive and joint sealant with very low monomer content (<0.1%) for interior/exterior use.",
        features: [
            "CE marked to EN 15651",
            "LEED v4 compliant",
            "Class A+ VOC emissions",
            "Bonds concrete/masonry/metal",
            "±25% movement capability",
            "No diisocyanate training required"
        ],
        specSheet: "assets/sika/SealingAndBonding/j2.pdf"
    },
    "sikaflex-pro-3-purform": {
        name: "Sikaflex® PRO-3 Purform®",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j3.png"],
        description: "Tamper-resistant polyurethane sealant for floor joints and civil engineering with ±25-50% movement capability.",
        features: [
            "Anti-pick/vandal-resistant",
            "ASTM C719 Class 50",
            "Chemical/weather resistant",
            "Bubble-free curing",
            "Food industry approved",
            "<0.1% monomer content"
        ],
        specSheet: "assets/sika/SealingAndBonding/j3.pdf"
    },
    "sikaflex-tank-n": {
        name: "Sikaflex® Tank N",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j4.png"],
        description: "Chemical-resistant elastic sealant for joints exposed to fuels, oils, and water-polluting liquids.",
        features: [
            "ETA-09/0272 approved",
            "Resists petrol/diesel/oils",
            "±25% movement capability",
            "LEED v3 compliant",
            "High mechanical resistance",
            "For professional use only"
        ],
        specSheet: "assets/sika/SealingAndBonding/j4.pdf"
    },
    "sika-boom": {
        name: "Sika Boom®",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j5.png"],
        description: "One-component polyurethane expanding foam for sealing gaps, cracks, and penetrations.",
        features: [
            "Expands 2-3x original size",
            "Tack-free in 5 minutes",
            "Sandable/paintable",
            "ASTM E84 fire rated",
            "Adheres to most materials",
            "-29°C to +93°C service range"
        ],
        specSheet: "assets/sika/SealingAndBonding/j5.pdf"
    },
    "sika-primer-3n": {
        name: "Sika® Primer-3 N",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j6.png"],
        description: "Solvent-based primer for Sikaflex®, SikaHyflex®, and Sikasil® products on porous substrates.",
        features: [
            "Short flash-off time (<30 min)",
            "LEED® EQc 4.1 compliant",
            "VOC content <700 g/l",
            "Water repellent",
            "For concrete/GRC/metal",
            "Easy brush/roller application"
        ],
        specSheet: "assets/sika/SealingAndBonding/j6.pdf"
    },
    "sikaflex-406-kc": {
        name: "Sikaflex®-406 KC",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j7.png"],
        description: "Self-leveling polyurethane sealant with booster accelerator for high-traffic joints.",
        features: [
            "±25% movement capability",
            "Traffic-ready in 3 hours",
            "Resists diesel/jet fuel",
            "CE marked to EN 15651-4",
            "i-Cure® booster technology",
            "For recessed/broadcast joints"
        ],
        specSheet: "assets/sika/SealingAndBonding/j7.pdf"
    },
    "sika-firestop": {
        name: "Sika® FireStop",
        solution: "Sealing and Bonding",
        images: ["assets/sika/SealingAndBonding/j8.png"],
        description: "Intumescent inorganic silicate sealant for fire-rated joints and penetrations.",
        features: [
            "Withstands +1000°C",
            "BS 476 Part 4 compliant",
            "Expands at +250°C",
            "Non-combustible",
            "Fume-free in fire",
            "Shore D 50 hardness"
        ],
        specSheet: "assets/sika/SealingAndBonding/j8.pdf"
    }
}
},
    kingspan: {
    name: "Kingspan Thermal Insulation",
    description: "Global leader in high-performance insulation and building envelope solutions.",
    logo: "assets/image/king.png",
    solutions: {
        insulationBoards: {
            name: "Insulation Boards",
            description: "High-performance insulation solutions for roofs, walls, and floors to enhance energy efficiency and thermal performance in buildings.",
            products: {
                "GreenGuard GG300": {
                    name: "GreenGuard GG300",
                    images: ["assets/kingspan/InsulationBoards/in1.png"],
                    description: "Rigid extruded polystyrene insulation for inverted roofs, basements, car park decks and heavy duty commercial, industrial and cold store flooring.",
                    features: [
                        "High compressive strength",
                        "Moisture resistant",
                        "Compatible with green roof systems",
                        "Rigid extruded polystyrene",
                        "Ideal for heavy-duty applications"
                    ],
                    applications: [
                        "Inverted roof systems",
                        "Basement walls",
                        "Car park decks",
                        "Cold store flooring",
                        "Industrial flooring"
                    ],
                    specSheet: "assets/kingspan/InsulationBoards/in1.pdf"
                },
                "Kooltherm K10 Soffit Board": {
                    name: "Kooltherm K10 Soffit Board",
                    images: ["assets/kingspan/InsulationBoards/in2.png"],
                    description: "Quick and easy to install soffit insulation board with durable foil finish, offering thermal conductivity as low as 0.020 W/m.K at 23°C.",
                    features: [
                        "Thermal conductivity 0.020 W/m.K",
                        "FM Approved to FM 4880",
                        "Durable foil facings",
                        "Easy installation",
                        "Lightweight yet rigid"
                    ],
                    applications: [
                        "Soffit insulation",
                        "Structural ceilings",
                        "Canopy insulation",
                        "Underside of roof decks"
                    ],
                    specSheet: "assets/kingspan/InsulationBoards/in2.pdf"
                },
                "Therma TR22": {
                    name: "Therma TR22",
                    images: ["assets/kingspan/InsulationBoards/in3.png"],
                    description: "High performance fibre-free polyisocyanurate (PIR) roof insulation board with high compressive strength.",
                    features: [
                        "Compressive stress exceeds 250 kPa",
                        "Rigid thermoset insulation",
                        "Compatible with green roofs",
                        "Excellent thermal performance",
                        "Lightweight and easy to handle"
                    ],
                    applications: [
                        "Flat roof insulation",
                        "Green roof systems",
                        "High traffic roof areas",
                        "Commercial roofing"
                    ],
                    specSheet: "assets/kingspan/InsulationBoards/in3.pdf"
                },
                "Therma TR27": {
                    name: "Therma TR27",
                    images: ["assets/kingspan/InsulationBoards/in4.png"],
                    description: "PIR flat roof insulation suitable for roofs waterproofed with fully adhered single-ply and cold liquid applied waterproofing.",
                    features: [
                        "Compatible with single-ply systems",
                        "Suitable for green roofs",
                        "High thermal efficiency",
                        "Durable composite foil facings",
                        "Excellent fire performance"
                    ],
                    applications: [
                        "Adhered single-ply roofs",
                        "Cold liquid applied roofs",
                        "Protected membrane roofs",
                        "Commercial flat roofing"
                    ],
                    specSheet: "assets/kingspan/InsulationBoards/in4.pdf"
                },
                "Thermataper TT47": {
                    name: "Thermataper TT47",
                    images: ["assets/kingspan/InsulationBoards/in5.png"],
                    description: "Tapered insulation designed to enhance water drainage for flat roofs with various waterproofing systems.",
                    features: [
                        "Pre-formed tapered design",
                        "Promotes positive drainage",
                        "Compatible with multiple waterproofing types",
                        "Custom slopes available",
                        "High compressive strength"
                    ],
                    applications: [
                        "Flat roof drainage systems",
                        "Roofs with adhered membranes",
                        "Mastic asphalt roofs",
                        "Built-up felt roofs"
                    ],
                    specSheet: "assets/kingspan/InsulationBoards/in5.pdf"
                },
                "Thermaroof TR26": {
                    name: "Thermaroof TR26",
                    images: ["assets/kingspan/InsulationBoards/in6.png"],
                    description: "High performance PIR insulation board for flat roofs with 0.022 W/mK thermal conductivity, compatible with mechanically fixed single-ply systems.",
                    features: [
                        "Thermal conductivity 0.022 W/mK",
                        "Mechanically fixed system compatible",
                        "Green roof compatible",
                        "Fast track installation",
                        "Suitable for refurbishment"
                    ],
                    applications: [
                        "Mechanically fixed single-ply roofs",
                        "Roof refurbishment",
                        "Commercial roofing",
                        "Fast track projects"
                    ],
                    specSheet: "assets/kingspan/InsulationBoards/in6.pdf"
                }
            }
        },
        ductwork: {
            name: "Ductwork",
            description: "Insulated ductwork solutions for HVAC systems",
            products: {
                "KDuct Pre-Clad PIR": {
                    name: "KDuct Pre-Clad PIR",
                    images: ["assets/kingspan/Ductwork/du1.jpeg"],
                    description: "Kingspan KDuct Pre-Clad PIR panels comprise of a fibre-free rigid thermoset foil faced polyisocyanurate (PIR) insulation with a outer composite aluminium laminated facing.",
                    features: [
                        "Ultra-strength and rigidness",
                        "Traditional exterior ductwork",
                        "Easy to clean."
                    ],
                    specSheet: "assets/kingspan/Ductwork/du1.pdf"
                },
                "KDuct Pre-Clad Phenolic": {
                    name: "KDuct Pre-Clad Phenolic",
                    images: ["assets/kingspan/Ductwork/du2.png"],
                    description: "Kingspan KDuct Pre-Clad Phenolic Duct System has a rigid thermoset insulation core. It has a fibre-free and closed cell insulation core.",
                    features: [
                        "Easy to clean.",
                        "Fast–track single–fix installation.",
                        "Fibre–free insulation core."
                    ],
                    specSheet: "assets/kingspan/Ductwork/du2.pdf"
                },
                "PalDuct PIR": {
                    name: "PalDuct PIR",
                    images: ["assets/kingspan/Ductwork/du3.png"],
                    description: "Kingspan PalDuct PIR Panels comprise a rigid thermoset polyisocyanurate (PIR) insulation core.",
                    features: [
                        "Fibre–free insulation core",
                        "Low weight fabricated ductwork, quick installation",
                        "Space saving: flush-fitting installation possible."
                    ],
                    specSheet: "assets/kingspan/Ductwork/du3.pdf"
                },
                "PalDuct Phenolic": {
                    name: "PalDuct Phenolic",
                    images: ["assets/kingspan/Ductwork/du4.png"],
                    description: "Kingspan PalDuct Phenolic Panels have a rigid thermoset phenolic insulation core.",
                    features: [
                        "UL Listed as a Class 1 Air Duct, to Standard for Safety UL 181 (Factory Made Air Ducts & Air Connectors)",
                        "Fibre–free insulation core",
                        "Low weight fabricated ductwork, quick installation"
                    ],
                    specSheet: "assets/kingspan/Ductwork/du4.pdf"
                }
            }
        }
    },
    allProducts: {
        // Insulation Boards Products
        "GreenGuard GG300": {
            name: "GreenGuard GG300",
            solution: "Insulation Boards",
            images: ["assets/kingspan/InsulationBoards/in1.png"],
            description: "Rigid extruded polystyrene insulation for inverted roofs, basements, car park decks and heavy duty commercial, industrial and cold store flooring.",
            features: [
                "High compressive strength",
                "Moisture resistant",
                "Compatible with green roof systems"
            ],
            specSheet: "assets/kingspan/InsulationBoards/in1.pdf"
        },
        "Kooltherm K10 Soffit Board": {
            name: "Kooltherm K10 Soffit Board",
            solution: "Insulation Boards",
            images: ["assets/kingspan/InsulationBoards/in2.png"],
            description: "Quick and easy to install soffit insulation board with durable foil finish, offering thermal conductivity as low as 0.020 W/m.K at 23°C.",
            features: [
                "Thermal conductivity 0.020 W/m.K",
                "FM Approved to FM 4880",
                "Durable foil facings"
            ],
            specSheet: "assets/kingspan/InsulationBoards/in2.pdf"
        },
        "Therma TR22": {
            name: "Therma TR22",
            solution: "Insulation Boards",
            images: ["assets/kingspan/InsulationBoards/in3.png"],
            description: "High performance fibre-free polyisocyanurate (PIR) roof insulation board with high compressive strength.",
            features: [
                "Compressive stress exceeds 250 kPa",
                "Rigid thermoset insulation",
                "Compatible with green roofs"
            ],
            specSheet: "assets/kingspan/InsulationBoards/in3.pdf"
        },
        "Therma TR27": {
            name: "Therma TR27",
            solution: "Insulation Boards",
            images: ["assets/kingspan/InsulationBoards/in4.png"],
            description: "PIR flat roof insulation suitable for roofs waterproofed with fully adhered single-ply and cold liquid applied waterproofing.",
            features: [
                "Compatible with single-ply systems",
                "Suitable for green roofs",
                "High thermal efficiency"
            ],
            specSheet: "assets/kingspan/InsulationBoards/in4.pdf"
        },
        "Thermataper TT47": {
            name: "Thermataper TT47",
            solution: "Insulation Boards",
            images: ["assets/kingspan/InsulationBoards/in5.png"],
            description: "Tapered insulation designed to enhance water drainage for flat roofs with various waterproofing systems.",
            features: [
                "Pre-formed tapered design",
                "Promotes positive drainage",
                "Compatible with multiple waterproofing types"
            ],
            specSheet: "assets/kingspan/InsulationBoards/in5.pdf"
        },
        "Thermaroof TR26": {
            name: "Thermaroof TR26",
            solution: "Insulation Boards",
            images: ["assets/kingspan/InsulationBoards/in6.png"],
            description: "High performance PIR insulation board for flat roofs with 0.022 W/mK thermal conductivity, compatible with mechanically fixed single-ply systems.",
            features: [
                "Thermal conductivity 0.022 W/mK",
                "Mechanically fixed system compatible",
                "Green roof compatible"
            ],
            specSheet: "assets/kingspan/InsulationBoards/in6.pdf"
        },

        // Ductwork Products
        "KDuct Pre-Clad PIR": {
            name: "KDuct Pre-Clad PIR",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du1.jpeg"],
            description: "Kingspan KDuct Pre-Clad PIR panels comprise of a fibre-free rigid thermoset foil faced polyisocyanurate (PIR) insulation with a outer composite aluminium laminated facing.",
            features: [
                "Ultra-strength and rigidness",
                "Traditional exterior ductwork",
                "Easy to clean."
            ],
            specSheet: "assets/kingspan/Ductwork/du1.pdf"
        },
        "KDuct Pre-Clad Phenolic": {
            name: "KDuct Pre-Clad Phenolic",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du2.png"],
            description: "Kingspan KDuct Pre-Clad Phenolic Duct System has a rigid thermoset insulation core. It has a fibre-free and closed cell insulation core.",
            features: [
                "Easy to clean.",
                "Fast–track single–fix installation.",
                "Fibre–free insulation core."
            ],
            specSheet: "assets/kingspan/Ductwork/du2.pdf"
        },
        "PalDuct PIR": {
            name: "PalDuct PIR",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du3.png"],
            description: "Kingspan PalDuct PIR Panels comprise a rigid thermoset polyisocyanurate (PIR) insulation core.",
            features: [
                "Fibre–free insulation core",
                "Low weight fabricated ductwork, quick installation",
                "Space saving: flush-fitting installation possible."
            ],
            specSheet: "assets/kingspan/Ductwork/du3.pdf"
        },
        "PalDuct Phenolic": {
            name: "PalDuct Phenolic",
            solution: "Ductwork",
            images: ["assets/kingspan/Ductwork/du4.png"],
            description: "Kingspan PalDuct Phenolic Panels have a rigid thermoset phenolic insulation core.",
            features: [
                "UL Listed as a Class 1 Air Duct, to Standard for Safety UL 181 (Factory Made Air Ducts & Air Connectors)",
                "Fibre–free insulation core",
                "Low weight fabricated ductwork, quick installation"
            ],
            specSheet: "assets/kingspan/Ductwork/du4.pdf"
        }
    }
},
    aco: {
        name: "ACO Drainage Systems",
        description: "Specialists in drainage and water management solutions.",
        logo: "https://www.aco.com/fileadmin/template/images/aco-logo.svg",
        solutions: {
            drainage: {
    name: "Drainage Systems",
    description: "Comprehensive drainage solutions for all applications",
    products: {
        "aco-pool-perimeter-channel": {
            name: "ACO Pool Perimeter Channel",
            images: [
                "assets/ACO/BuildingDrainage/bu1.png"
            ],
            description: "Discreet and aesthetic drainage design for pool perimeters, with welded stainless steel body.",
            features: [
                "Discreet / aesthetic drainage design",
                "Welded stainless steel body, no risk of leakage",
                "Low construction height suitable for renovation",
                "Custom made sizes, horizontal outlets and corner sections available",
                "Channel with or without levelling feet",
                "Technical design assistance available"
            ],
            applications: [
                "Dividing pool cleaning areas from surrounding pool areas",
                "Balcony drainage (also suitable)"
            ],
            packaging: "Varies based on custom sizes",
            color: "Stainless Steel (Grade 316 or 304)",
            specSheet: "assets/ACO/BuildingDrainage/bu1.pdf"
        },
        "aco-showerdrain-linear": {
            name: "ACO ShowerDrain Linear",
            images: [
                "assets/ACO/BuildingDrainage/bu2.png"
            ],
            description: "Borderless drainage solutions for showers, offering modern stainless steel and glass covers, and tileable options.",
            features: [
                "Inspiration for creative bathroom design",
                "Oversize products available",
                "Modern stainless steel and glass covers",
                "Tileable covers for seamless integration",
                "Compound sealing for reliable floor structure protection"
            ],
            applications: [
                "Bathroom drainage",
                "Larger bathrooms and similar areas (can be combined with point drainage)"
            ],
            packaging: "Varies by model",
            color: "Stainless Steel, Glass, Tileable options",
            specSheet: "assets/ACO/BuildingDrainage/bu2.pdf"
        },
        "aco-roof-drainage": {
            name: "ACO Roof Drainage",
            images: [
                "assets/ACO/BuildingDrainage/bu3.png"
            ],
            description: "System solutions for flat roofs, parking decks, balconies, facades and terraces, including roof drains and emergency drainage.",
            features: [
                "Suitable for flat roofs, parking decks, balconies, facades and terraces",
                "Internal drainage recommended for gentle slopes",
                "Requires at least two drains or one drain and a safety overflow",
                "Thermally insulated options available",
                "Fire protection options available"
            ],
            applications: [
                "Flat roof drainage",
                "Parking deck drainage",
                "Balcony and terrace drainage",
                "Facade drainage"
            ],
            packaging: "Varies by drain type",
            color: "Not specified",
            specSheet: "assets/ACO/BuildingDrainage/bu3.pdf"
        },
        "aco-parking-deck-gullies": {
            name: "ACO Parking Deck Gullies",
            images: [
                "assets/ACO/BuildingDrainage/bu4.png"
            ],
            description: "Parking deck gullies (Passavant) with guaranteed fire protection and 100% UV resistance.",
            features: [
                "Guaranteed fire protection (R 30 – R 120)",
                "No additional fire load (Building material class A1, non-flammable)",
                "100% UV resistant",
                "Maintenance-friendly",
                "Flexibility in sealing (PVC/PE/PP/Bitumen)",
                "Variable installation with on-site height adjustment"
            ],
            applications: [
                "Drainage for parking decks",
                "Can be utilised as emergency drainage"
            ],
            packaging: "Not specified",
            color: "Cast Iron with paint coat (transport protection)",
            specSheet: "assets/ACO/BuildingDrainage/bu4.pdf"
        },
        "aco-access-covers": {
            name: "ACO Access Covers",
            images: [
                "assets/ACO/BuildingDrainage/bu5.png"
            ],
            description: "Access covers made from high-quality materials like aluminium alloys, stainless steel, galvanized steel, and composites for various interior and exterior areas.",
            features: [
                "Certified according to European standards",
                "High reliability and long life",
                "Flexible installation in interior or exterior areas",
                "Easy installation, handling, maintenance, and cleaning",
                "Wide range of standard types with many options",
                "Tailor-made production possible"
            ],
            applications: [
                "Access solutions for various interior and exterior areas"
            ],
            packaging: "Varies by type and size",
            color: "Aluminium, Stainless Steel, Galvanized Steel, Composites",
            specSheet: "assets/ACO/BuildingDrainage/bu5.pdf"
        },
        "aco-easyflow-bathroom-gully": {
            name: "ACO Easyflow Bathroom Gully System",
            images: [
                "assets/ACO/BuildingDrainage/bu6.png"
            ],
            description: "Bathroom gully system designed to eliminate design risk, reduce installed and life cost, and deliver exceptional finish and performance.",
            features: [
                "High-performance materials",
                "Design experience and project support",
                "Global manufacturing capacity",
                "Includes wetroom and shower drainage systems",
                "Stainless steel Modular Channel system",
                "Stainless steel EuroGully gully system"
            ],
            applications: [
                "Wetrooms and showers",
                "General bathroom drainage"
            ],
            packaging: "Varies by system components",
            color: "Stainless Steel, Polymer Composite",
            specSheet: "assets/ACO/BuildingDrainage/bu6.pdf"
        },
        "aco-eg150-eurogullies": {
            name: "ACO EG150 Eurogullies",
            images: [
                "assets/ACO/BuildingDrainage/bu7.png"
            ],
            description: "High-performance stainless steel floor gullies for washrooms, wet bathrooms, changing rooms, swimming pools, hotels, apartments, and toilets.",
            features: [
                "Manufactured from austenitic 304 grade stainless steel (optional 316)",
                "Excellent corrosion resistance",
                "Compact design",
                "Removable in-line foul air trap",
                "Choice of vertical or horizontal spigot outlets",
                "Telescopic height adjustment and full rotational adjustment"
            ],
            applications: [
                "Washrooms",
                "‘Wet’ bathrooms",
                "Changing rooms",
                "Swimming pools",
                "Hotels, apartments, and toilets"
            ],
            packaging: "Not specified",
            color: "Stainless Steel",
            specSheet: "assets/ACO/BuildingDrainage/bu7.pdf"
        },
        "aco-slot-and-box-channels": {
            name: "ACO Slot and Box Channels",
            images: [
                "assets/ACO/BuildingDrainage/bu8.png"
            ],
            description: "ACO slot channel 20 and ACO box channels (125, 200) made from austenitic stainless steel for optimal drainage solutions.",
            features: [
                "Highly corrosion resistant",
                "Non-porous, easy to clean and disinfect",
                "Aesthetically pleasant",
                "Resistant to temperature extremes and thermal shock",
                "100% recyclable material",
                "Pickle passivation surface treatment for corrosion resistance"
            ],
            applications: [
                "Various drainage applications requiring stainless steel channels"
            ],
            packaging: "Varies by channel type and size",
            color: "Stainless Steel",
            specSheet: "assets/ACO/BuildingDrainage/bu8.pdf"
        }
    }
},
foodAndBeverageCommercialKitchens: {
    name: "Food and Beverage Commercial Kitchens",
    description: "Hygienic drainage and grease management solutions for commercial kitchens and the food & beverage industry.",
    products: {
        "aco-hygienic-drainage": {
            name: "ACO Hygienic Drainage",
            images: [
                "assets/ACO/FoodandBeverageCommercialKitchens/fb1.png"
            ],
            description: "Hygienic drainage solutions designed to prevent harmful bacteria contamination in commercial kitchens, meeting EHEDG recommendations.",
            features: [
                "Hygienic design to prevent bacteria build-up",
                "Minimal build-up of food particles and debris",
                "Safe connection with surrounding floor",
                "Sleek slope function for full drainability",
                "Eliminates stagnant odour of waste water"
            ],
            applications: [
                "Commercial kitchens",
                "Food processing areas"
            ],
            packaging: "Not specified",
            color: "Stainless Steel",
            specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb1.pdf"
        },
        "aco-industrial-hygienic-drainage": {
            name: "ACO Industrial Hygienic Drainage",
            images: [
                "assets/ACO/FoodandBeverageCommercialKitchens/fb2.png"
            ],
            description: "Sustainable, integrated hygienic drainage systems for industrial applications in the food and beverage sector, focusing on safety and hygiene.",
            features: [
                "Meets stringent hygienic requirements (EN 1672, EN ISO 14159, EHEDG)",
                "Full drainability with outlet in the lowest position and sleek slopes",
                "Round internal corners (minimum radius 3mm)",
                "Hygienic fully welded butt joints",
                "Sealed joints to prevent soil and bacteria accumulation",
                "Waterproof edge infill on channel frames"
            ],
            applications: [
                "Food and beverage processing plants",
                "Industrial kitchens"
            ],
            packaging: "Not specified",
            color: "Stainless Steel",
            specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb2.pdf"
        },
        "aco-drainage-management-food-beverage": {
            name: "ACO Drainage Management for Food & Beverage",
            images: [
                "assets/ACO/FoodandBeverageCommercialKitchens/fb3.png"
            ],
            description: "Effective drainage management critical for the hygienic performance of food production facilities, mitigating contamination hazards.",
            features: [
                "Helps mitigate hazards from the external environment",
                "Central to safe and hygienic internal operation",
                "Reduces risk of microbiological contamination from surface liquids",
                "Supports proper cleaning to prevent food contamination and spoilage",
                "Designed to meet and surpass EHEDG recommendations",
                "Potential to reduce costs on staff, detergents, and downtime"
            ],
            applications: [
                "Food production facilities",
                "Food processing plants"
            ],
            packaging: "Not specified",
            color: "Stainless Steel",
            specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb3.pdf"
        },
        "aco-drainage-solutions-wine-industry": {
            name: "ACO Drainage Solutions for the Wine Industry",
            images: [
                "assets/ACO/FoodandBeverageCommercialKitchens/fb4.png"
            ],
            description: "Drainage solutions tailored for the wine industry, focusing on effective layout, reliable floor-drainage connection, and cleaning performance for safety and hygiene.",
            features: [
                "Effective layout and sufficient capacity to prevent flooding",
                "Reliable floor-drainage connection to withstand dynamic and thermal loading",
                "Designed for complete and practical cleaning",
                "Aimed at maintaining high hygienic standards",
                "Helps manage maintenance costs"
            ],
            applications: [
                "Wineries",
                "Beverage production environments"
            ],
            packaging: "Not specified",
            color: "Not specified",
            specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb4.pdf"
        },
        "aco-tray-channel": {
            name: "ACO Tray Channel",
            images: [
                "assets/ACO/FoodandBeverageCommercialKitchens/fb5.png"
            ],
            description: "ACO tray channels made from austenitic stainless steel, offering high corrosion resistance and a non-porous, easy-to-clean surface.",
            features: [
                "Highly corrosion resistant",
                "Non-porous, easy to clean and disinfect",
                "Aesthetically pleasing",
                "Resistant to temperature extremes and thermal shock",
                "Coefficient of linear expansion similar to concrete",
                "100% recyclable material",
                "Pickle passivation surface treatment for enhanced corrosion resistance"
            ],
            applications: [
                "Various drainage applications, particularly where hygienic and corrosion-resistant channels are needed"
            ],
            packaging: "Varies by channel type and size",
            color: "Stainless Steel (Grade 304 or 316L)",
            specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb5.pdf"
        }
    }
},
portAndAirportDrainage: {
    name: "Port and Airport Drainage",
    description: "Heavy-duty drainage solutions for ports, airports, and other demanding environments.",
    products: {
        "aco-drain-powerlock-sk": {
            name: "ACO DRAIN® Powerlock S 100 K to S 300 K",
            images: [
                "assets/ACO/PortandAirportDrainage/po1.png"
            ],
            description: "Heavy load channel SK designed for heavy-load areas up to load class F 900, featuring a robust design and liquid-tight connections.",
            features: [
                "Load classes up to F 900 (DIN EN 1433)",
                "Nominal widths: 100, 150, 200, 300",
                "Material: Polymer concrete with cast frame and cast iron grating",
                "Slimline design without compromising stability",
                "Liquid-tight channel trains and connections with ACO safety seam",
                "Compact and stable with reinforcing and anchoring ribs"
            ],
            applications: [
                "Motorways",
                "Runways and airfields at airports",
                "Container handling centres",
                "Industrial surfaces",
                "Logistics areas and routes",
                "Rest stops and service stations"
            ],
            packaging: "Channel elements in various heights and with optional integrated bottom gradients.",
            color: "Polymer concrete with cast iron grating",
            specSheet: "assets/ACO/PortandAirportDrainage/po1.pdf"
        },
        "aco-drain-monoblock-rd-po2": {
            name: "ACO DRAIN® Monoblock RD",
            images: [
                "assets/ACO/PortandAirportDrainage/po2.png"
            ],
            description: "Monocast channel design (trench body + grating) made of polymer concrete, with a narrow inflow slot and Drainlock® locking device.",
            features: [
                "Monocast channel design (trench body + grating)",
                "Inspection elements with grating and Drainlock®",
                "Load class D 400",
                "Narrow inflow slot (8-15 mm depending on model)",
                "Monolithic design prevents faulting and theft",
                "Easy and quick installation"
            ],
            applications: [
                "Intersections of footpaths with roads",
                "Line drainage systems"
            ],
            packaging: "One-piece design made of polymer concrete with grating.",
            color: "Polymer concrete",
            specSheet: "assets/ACO/PortandAirportDrainage/po2.pdf"
        },
        "aco-drain-monoblock-rd-po3": {
            name: "ACO DRAIN® Monoblock RD (Duplicate Description)",
            images: [
                "assets/ACO/PortandAirportDrainage/po3.png"
            ],
            description: "Monocast channel design (trench body + grating) made of polymer concrete, with a narrow inflow slot and Drainlock® locking device. (Description appears to be a duplicate of po2)",
            features: [
                "Monocast channel design (trench body + grating)",
                "Inspection elements with grating and Drainlock®",
                "Load class D 400",
                "Narrow inflow slot (8-15 mm depending on model)",
                "Monolithic design prevents faulting and theft",
                "Easy and quick installation"
            ],
            applications: [
                "Intersections of footpaths with roads",
                "Line drainage systems"
            ],
            packaging: "One-piece design made of polymer concrete with grating.",
            color: "Polymer concrete",
            specSheet: "assets/ACO/PortandAirportDrainage/po3.pdf"
        },
        "secant-servokat-sec": {
            name: "SECANT®/SERVOKAT®-SEC Manhole Covers",
            images: [
                "assets/ACO/PortandAirportDrainage/po4.png"
            ],
            description: "Manhole cover systems offering flexibility and accessibility for various applications, including options with opening aids.",
            features: [
                "Classes B 125, M 125, D 400, SLW 60-25 km/h (SECANT®)",
                "Classes B 125, M 125, D 400, F 900 with opening aid (SERVOKAT®-SEC)",
                "Covers and frames can be combined",
                "Openings remain fully accessible",
                "Wide field of application (supply/disposal, material shafts, pumping stations, etc.)",
                "Optional single duct, multiple duct, or beam multiple cover units",
                "SERVOKAT®-SEC with opening aid for frequent operation"
            ],
            applications: [
                "Energy head offices",
                "Material shafts in operational premises",
                "Pumping stations",
                "Transformer plants",
                "Control shafts",
                "Rain water retention basins"
            ],
            packaging: "Varies by cover type (single duct, multiple duct, etc.)",
            color: "In-situ filling possible with various materials (concrete, asphalt, tiles)",
            specSheet: "assets/ACO/PortandAirportDrainage/po4.pdf"
        }
    }
},
externalDrainage: {
    name: "External Drainage",
    description: "Comprehensive external surface water management solutions.",
    products: {
        "aco-drain-monoblock-pd": {
            name: "ACO DRAIN® Monoblock PD",
            images: [
                "assets/ACO/ExternalDrainage/ex1.png"
            ],
            description: "Monocast channel design (trench body + grating) made of natural or anthracite polymer concrete, Load class D400.",
            features: [
                "Monocast design prevents faulting and theft of the grating",
                "Quick and easy installation due to side structure (anchoring pockets) and monolithic design",
                "Optional sealing compounds for complete watertightness",
                "V profile for self-cleaning effect even in small drainage areas"
            ],
            applications: [
                "Intersections of footpaths with roads",
                "Line drainage systems"
            ],
            packaging: "Monoblock design",
            color: "Natural or anthracite polymer concrete",
            specSheet: "assets/ACO/ExternalDrainage/ex1.pdf"
        },
        "aco-s-range": {
            name: "ACO S Range",
            images: [
                "assets/ACO/ExternalDrainage/ex2.png"
            ],
            description: "Heavy duty channel drainage system to Load Class F900, with cast iron edge rail, heavy duty grating and eight bolts per metre.",
            features: [
                "Heavy duty channel drainage system up to Load Class F900",
                "Cast iron edge rail for reinforcement",
                "Heavy duty grating secured with eight bolts per metre",
                "Excellent hydraulic performance"
            ],
            applications: [
                "Areas requiring heavy duty drainage"
            ],
            packaging: "Channels with internal widths 100mm (S100), 150mm (S150), 200mm (S200), and 300mm (S300)",
            color: "Not specified",
            specSheet: "assets/ACO/ExternalDrainage/ex2.pdf"
        },
        "aco-brickslot": {
            name: "ACO Brickslot",
            images: [
                "assets/ACO/ExternalDrainage/ex3.png"
            ],
            description: "Discreet slot drainage system with a range of gratings for architectural sites, compatible with various ACO DRAIN channels.",
            features: [
                "Discreet drainage design",
                "Available in stainless steel / galvanised steel",
                "Applications up to load class D400 (depending on channel body)",
                "Compatible with various ACO DRAIN channel bodies"
            ],
            applications: [
                "Architectural sites requiring discreet drainage"
            ],
            packaging: "Varies based on grating and channel",
            color: "Stainless steel / Galvanised steel",
            specSheet: "assets/ACO/ExternalDrainage/ex3.pdf"
        },
        "aco-self-range": {
            name: "ACO SELF Range",
            images: [
                "assets/ACO/ExternalDrainage/ex4.png"
            ],
            description: "Residential drainage solutions designed for the private sector, combining quality performance with high design requirements.",
            features: [
                "Designed for the private sector",
                "Suitable for travel by passenger cars",
                "Various connection types available (sump unit, polymeric endcap, preform channel)",
                "Grids with screwless locking solution"
            ],
            applications: [
                "Residential areas",
                "Driveways"
            ],
            packaging: "Basic elements from polymer concrete",
            color: "Various grating materials and colors available",
            specSheet: "assets/ACO/ExternalDrainage/ex4.pdf"
        },
        "aco-composite-manhole-covers": {
            name: "ACO Composite Manhole Covers",
            images: [
                "assets/ACO/ExternalDrainage/ex5.png"
            ],
            description: "Composite manhole covers made from SMC resin, offering a low risk of theft, light weight, and high chemical resistance.",
            features: [
                "Low risk of theft",
                "Available in round and square top sections",
                "Light, Medium and Heavy load classes (A15 – E600)",
                "Low maintenance and easy installation",
                "High chemical and biological resistance",
                "Lightweight compared to concrete"
            ],
            applications: [
                "Pedestrian walkways and pedal cyclists",
                "Car parking decks",
                "Driveways",
                "Coastal areas",
                "Footpaths",
                "Residential areas",
                "Sewer & Storm water drains"
            ],
            packaging: "Various sizes and shapes",
            color: "Not specified",
            specSheet: "assets/ACO/ExternalDrainage/ex5.pdf"
        },
        "aco-systems-sa-pointdrain": {
            name: "ACO Systems SA PointDrain Type 25",
            images: [
                "assets/ACO/ExternalDrainage/ex6.png"
            ],
            description: "Durable point drain solution made from polymer concrete, suitable for pedestrian/light vehicle traffic applications.",
            features: [
                "Basin manufactured from polymer concrete",
                "Several outlet configurations for system flexibility",
                "Choice of grates for pedestrian or light vehicular traffic",
                "Outperforms HDPE in compressive strength and resistance to freeze-thaw cycles"
            ],
            applications: [
                "Gardens",
                "Patios",
                "Walkways",
                "Driveways"
            ],
            packaging: "Polymer concrete basin",
            color: "Not specified (grate material varies)",
            specSheet: "assets/ACO/ExternalDrainage/ex6.pdf"
        },
        "aco-point-drainage": {
            name: "ACO Point Drainage",
            images: [
                "assets/ACO/ExternalDrainage/ex7.png"
            ],
            description: "ACO DRAIN® point drains, including yard drains and road gullies, made from polymer concrete with cast iron components for various load classes.",
            features: [
                "Yard drain with polymer concrete body, cast iron frame and grid",
                "Road gully Combipoint protects mortar joints from traffic damage",
                "Boltless locking system (Pointlock)",
                "One-piece, permanently sealed gully (for some models)",
                "No mortar joints (for some models)"
            ],
            applications: [
                "Kerbs",
                "Traffic lanes",
                "Car parks and industrial surfaces",
                "School yards",
                "Pedestrian zones",
                "Roads, paths, piazzas",
                "Airports"
            ],
            packaging: "Varies by type (yard drain, road gully)",
            color: "Polymer concrete with cast iron",
            specSheet: "assets/ACO/ExternalDrainage/ex7.pdf"
        },
        "aco-external-drainage-self": {
            name: "ACO External Drainage Self",
            images: [
                "assets/ACO/ExternalDrainage/ex8.png"
            ],
            description: "ACO Self® drainage designed for the private sector, combining quality with design, featuring screwless locking grids and polymer concrete channels.",
            features: [
                "Designed for the private sector",
                "Suitable for travel by private cars",
                "Basic elements from polymer concrete (frost resistant, high strength, smooth surface, V-profile)",
                "Screwless locking grids for easy installation and removal",
                "Sf groove for 100% sealed channel"
            ],
            applications: [
                "Around family homes",
                "Private driveways and gardens"
            ],
            packaging: "Polymer concrete channels",
            color: "Various grating materials (galvanised, stainless steel, cast iron, plastic) with different surface adjustments and painting shades.",
            specSheet: "assets/ACO/ExternalDrainage/ex8.pdf"
        }
    }
},
            wasteWaterManagementTechnology: {
    name: "Waste Water Management Technology",
    description: "Solutions for the pre-treatment of wastewater.",
    products: {
        "aco-grease-separators": {
            name: "ACO Grease Separators",
            images: [
                "assets/ACO/WasteWaterManagementTechnology/was1.png"
            ],
            description: "Grease separators for the catering industry, hotel trade, and food production to pre-treat fatty wastewater and protect drainage systems.",
            features: [
                "Prevents pipes from becoming greasy",
                "Ensures operational safety of the kitchen drainage",
                "Mandatory in industrial and commercial environments with grease-polluted wastewater",
                "Manufactured and tested according to DIN EN 1124 (ACO PIPE system components)",
                "Optional corrosion-resistant materials: stainless steel 1.4301 or 1.4571"
            ],
            applications: [
                "Commercial kitchens",
                "Catering industry",
                "Hotel trade",
                "Food production facilities"
            ],
            packaging: "Varies by separator size and type",
            color: "Stainless Steel (optional)",
            specSheet: "assets/ACO/WasteWaterManagementTechnology/was1.pdf"
        },
        "aco-light-oil-separators-coalisator-p": {
            name: "ACO Light Oil Separators Coalisator-P",
            images: [
                "assets/ACO/WasteWaterManagementTechnology/was2.png"
            ],
            description: "Separator systems for light oil, utilizing coalescence material, for use behind drainage points where mineral or light oils are present.",
            features: [
                "Essential where flammable oils or explosive atmospheres can develop",
                "Uses gravity separation and coalescence to remove light liquids",
                "Features automatic closing devices to prevent isolated light oils from reaching the drain (EN 858-2)",
                "Coalescence material aids in the bonding of small oil droplets"
            ],
            applications: [
                "Gas stations",
                "Parking areas, parking lots, roadways",
                "Washing areas, car wash facilities",
                "Workshops, vehicle recovery, scrap yards",
                "Transformer stations"
            ],
            packaging: "Varies by separator size and capacity",
            color: "Not specified",
            specSheet: "assets/ACO/WasteWaterManagementTechnology/was2.pdf"
        },
        "aco-grease-and-light-liquid-separators": {
            name: "ACO Grease and Light Liquid Separators (Below Ground)",
            images: [
                "assets/ACO/WasteWaterManagementTechnology/was3.png"
            ],
            description: "ACO grease and light liquid separators for below-ground installation, ensuring solids and liquids that can cause harm are held back from sewage pipes.",
            features: [
                "Manufactured in accordance with EN 1825 (Grease) and EN 858 (Light Liquid)",
                "Hydraulically tested",
                "General Building Supervisory Authority Authorisation and/or DIBT Berlin approval",
                "Product stability guaranteed for 50 years (certified statics)",
                "Protection against upwelling and maximum groundwater level"
            ],
            applications: [
                "Commercial operations generating wastewater",
                "Below ground installation where pre-treatment is required"
            ],
            packaging: "Below ground installation units",
            color: "Not specified",
            specSheet: "assets/ACO/WasteWaterManagementTechnology/was3.pdf"
        }
    }
}
        },
        allProducts: {
    // Drainage Systems Products
    "ACO Pool Perimeter Channel": {
        name: "ACO Pool Perimeter Channel",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu1.png"],
        description: "Discreet and aesthetic drainage design for pool perimeters, with welded stainless steel body.",
        features: [
            "Discreet / aesthetic drainage design",
            "Welded stainless steel body, no risk of leakage",
            "Low construction height suitable for renovation",
            "Custom made sizes, horizontal outlets and corner sections available",
            "Channel with or without levelling feet",
            "Technical design assistance available"
        ],
        applications: [
            "Dividing pool cleaning areas from surrounding pool areas",
            "Balcony drainage (also suitable)"
        ],
        packaging: "Varies based on custom sizes",
        color: "Stainless Steel (Grade 316 or 304)",
        specSheet: "assets/ACO/BuildingDrainage/bu1.pdf"
    },
    "ACO ShowerDrain Linear": {
        name: "ACO ShowerDrain Linear",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu2.png"],
        description: "Borderless drainage solutions for showers, offering modern stainless steel and glass covers, and tileable options.",
        features: [
            "Inspiration for creative bathroom design",
            "Oversize products available",
            "Modern stainless steel and glass covers",
            "Tileable covers for seamless integration",
            "Compound sealing for reliable floor structure protection"
        ],
        applications: [
            "Bathroom drainage",
            "Larger bathrooms and similar areas (can be combined with point drainage)"
        ],
        packaging: "Varies by model",
        color: "Stainless Steel, Glass, Tileable options",
        specSheet: "assets/ACO/BuildingDrainage/bu2.pdf"
    },
    "ACO Roof Drainage": {
        name: "ACO Roof Drainage",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu3.png"],
        description: "System solutions for flat roofs, parking decks, balconies, facades and terraces, including roof drains and emergency drainage.",
        features: [
            "Suitable for flat roofs, parking decks, balconies, facades and terraces",
            "Internal drainage recommended for gentle slopes",
            "Requires at least two drains or one drain and a safety overflow",
            "Thermally insulated options available",
            "Fire protection options available"
        ],
        applications: [
            "Flat roof drainage",
            "Parking deck drainage",
            "Balcony and terrace drainage",
            "Facade drainage"
        ],
        packaging: "Varies by drain type",
        color: "Not specified",
        specSheet: "assets/ACO/BuildingDrainage/bu3.pdf"
    },
    "ACO Parking Deck Gullies": {
        name: "ACO Parking Deck Gullies",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu4.png"],
        description: "Parking deck gullies (Passavant) with guaranteed fire protection and 100% UV resistance.",
        features: [
            "Guaranteed fire protection (R 30 – R 120)",
            "No additional fire load (Building material class A1, non-flammable)",
            "100% UV resistant",
            "Maintenance-friendly",
            "Flexibility in sealing (PVC/PE/PP/Bitumen)",
            "Variable installation with on-site height adjustment"
        ],
        applications: [
            "Drainage for parking decks",
            "Can be utilised as emergency drainage"
        ],
        packaging: "Not specified",
        color: "Cast Iron with paint coat (transport protection)",
        specSheet: "assets/ACO/BuildingDrainage/bu4.pdf"
    },
    "ACO Access Covers": {
        name: "ACO Access Covers",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu5.png"],
        description: "Access covers made from high-quality materials like aluminium alloys, stainless steel, galvanized steel, and composites for various interior and exterior areas.",
        features: [
            "Certified according to European standards",
            "High reliability and long life",
            "Flexible installation in interior or exterior areas",
            "Easy installation, handling, maintenance, and cleaning",
            "Wide range of standard types with many options",
            "Tailor-made production possible"
        ],
        applications: [
            "Access solutions for various interior and exterior areas"
        ],
        packaging: "Varies by type and size",
        color: "Aluminium, Stainless Steel, Galvanized Steel, Composites",
        specSheet: "assets/ACO/BuildingDrainage/bu5.pdf"
    },
    "ACO Easyflow Bathroom Gully System": {
        name: "ACO Easyflow Bathroom Gully System",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu6.png"],
        description: "Bathroom gully system designed to eliminate design risk, reduce installed and life cost, and deliver exceptional finish and performance.",
        features: [
            "High-performance materials",
            "Design experience and project support",
            "Global manufacturing capacity",
            "Includes wetroom and shower drainage systems",
            "Stainless steel Modular Channel system",
            "Stainless steel EuroGully gully system"
        ],
        applications: [
            "Wetrooms and showers",
            "General bathroom drainage"
        ],
        packaging: "Varies by system components",
        color: "Stainless Steel, Polymer Composite",
        specSheet: "assets/ACO/BuildingDrainage/bu6.pdf"
    },
    "ACO EG150 Eurogullies": {
        name: "ACO EG150 Eurogullies",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu7.png"],
        description: "High-performance stainless steel floor gullies for washrooms, wet bathrooms, changing rooms, swimming pools, hotels, apartments, and toilets.",
        features: [
            "Manufactured from austenitic 304 grade stainless steel (optional 316)",
            "Excellent corrosion resistance",
            "Compact design",
            "Removable in-line foul air trap",
            "Choice of vertical or horizontal spigot outlets",
            "Telescopic height adjustment and full rotational adjustment"
        ],
        applications: [
            "Washrooms",
            "Wet bathrooms",
            "Changing rooms",
            "Swimming pools",
            "Hotels, apartments, and toilets"
        ],
        packaging: "Not specified",
        color: "Stainless Steel",
        specSheet: "assets/ACO/BuildingDrainage/bu7.pdf"
    },
    "ACO Slot and Box Channels": {
        name: "ACO Slot and Box Channels",
        solution: "Drainage Systems",
        images: ["assets/ACO/BuildingDrainage/bu8.png"],
        description: "ACO slot channel 20 and ACO box channels (125, 200) made from austenitic stainless steel for optimal drainage solutions.",
        features: [
            "Highly corrosion resistant",
            "Non-porous, easy to clean and disinfect",
            "Aesthetically pleasant",
            "Resistant to temperature extremes and thermal shock",
            "100% recyclable material",
            "Pickle passivation surface treatment for corrosion resistance"
        ],
        applications: [
            "Various drainage applications requiring stainless steel channels"
        ],
        packaging: "Varies by channel type and size",
        color: "Stainless Steel",
        specSheet: "assets/ACO/BuildingDrainage/bu8.pdf"
    },

    // Food and Beverage Commercial Kitchens Products
    "ACO Hygienic Drainage": {
        name: "ACO Hygienic Drainage",
        solution: "Food and Beverage Commercial Kitchens",
        images: ["assets/ACO/FoodandBeverageCommercialKitchens/fb1.png"],
        description: "Hygienic drainage solutions designed to prevent harmful bacteria contamination in commercial kitchens, meeting EHEDG recommendations.",
        features: [
            "Hygienic design to prevent bacteria build-up",
            "Minimal build-up of food particles and debris",
            "Safe connection with surrounding floor",
            "Sleek slope function for full drainability",
            "Eliminates stagnant odour of waste water"
        ],
        applications: [
            "Commercial kitchens",
            "Food processing areas"
        ],
        packaging: "Not specified",
        color: "Stainless Steel",
        specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb1.pdf"
    },
    "ACO Industrial Hygienic Drainage": {
        name: "ACO Industrial Hygienic Drainage",
        solution: "Food and Beverage Commercial Kitchens",
        images: ["assets/ACO/FoodandBeverageCommercialKitchens/fb2.png"],
        description: "Sustainable, integrated hygienic drainage systems for industrial applications in the food and beverage sector, focusing on safety and hygiene.",
        features: [
            "Meets stringent hygienic requirements (EN 1672, EN ISO 14159, EHEDG)",
            "Full drainability with outlet in the lowest position and sleek slopes",
            "Round internal corners (minimum radius 3mm)",
            "Hygienic fully welded butt joints",
            "Sealed joints to prevent soil and bacteria accumulation",
            "Waterproof edge infill on channel frames"
        ],
        applications: [
            "Food and beverage processing plants",
            "Industrial kitchens"
        ],
        packaging: "Not specified",
        color: "Stainless Steel",
        specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb2.pdf"
    },
    "ACO Drainage Management for Food & Beverage": {
        name: "ACO Drainage Management for Food & Beverage",
        solution: "Food and Beverage Commercial Kitchens",
        images: ["assets/ACO/FoodandBeverageCommercialKitchens/fb3.png"],
        description: "Effective drainage management critical for the hygienic performance of food production facilities, mitigating contamination hazards.",
        features: [
            "Helps mitigate hazards from the external environment",
            "Central to safe and hygienic internal operation",
            "Reduces risk of microbiological contamination from surface liquids",
            "Supports proper cleaning to prevent food contamination and spoilage",
            "Designed to meet and surpass EHEDG recommendations",
            "Potential to reduce costs on staff, detergents, and downtime"
        ],
        applications: [
            "Food production facilities",
            "Food processing plants"
        ],
        packaging: "Not specified",
        color: "Stainless Steel",
        specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb3.pdf"
    },
    "ACO Drainage Solutions for the Wine Industry": {
        name: "ACO Drainage Solutions for the Wine Industry",
        solution: "Food and Beverage Commercial Kitchens",
        images: ["assets/ACO/FoodandBeverageCommercialKitchens/fb4.png"],
        description: "Drainage solutions tailored for the wine industry, focusing on effective layout, reliable floor-drainage connection, and cleaning performance for safety and hygiene.",
        features: [
            "Effective layout and sufficient capacity to prevent flooding",
            "Reliable floor-drainage connection to withstand dynamic and thermal loading",
            "Designed for complete and practical cleaning",
            "Aimed at maintaining high hygienic standards",
            "Helps manage maintenance costs"
        ],
        applications: [
            "Wineries",
            "Beverage production environments"
        ],
        packaging: "Not specified",
        color: "Not specified",
        specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb4.pdf"
    },
    "ACO Tray Channel": {
        name: "ACO Tray Channel",
        solution: "Food and Beverage Commercial Kitchens",
        images: ["assets/ACO/FoodandBeverageCommercialKitchens/fb5.png"],
        description: "ACO tray channels made from austenitic stainless steel, offering high corrosion resistance and a non-porous, easy-to-clean surface.",
        features: [
            "Highly corrosion resistant",
            "Non-porous, easy to clean and disinfect",
            "Aesthetically pleasing",
            "Resistant to temperature extremes and thermal shock",
            "Coefficient of linear expansion similar to concrete",
            "100% recyclable material",
            "Pickle passivation surface treatment for enhanced corrosion resistance"
        ],
        applications: [
            "Various drainage applications, particularly where hygienic and corrosion-resistant channels are needed"
        ],
        packaging: "Varies by channel type and size",
        color: "Stainless Steel (Grade 304 or 316L)",
        specSheet: "assets/ACO/FoodandBeverageCommercialKitchens/fb5.pdf"
    },

    // Port and Airport Drainage Products
    "ACO DRAIN® Powerlock S 100 K to S 300 K": {
        name: "ACO DRAIN® Powerlock S 100 K to S 300 K",
        solution: "Port and Airport Drainage",
        images: ["assets/ACO/PortandAirportDrainage/po1.png"],
        description: "Heavy load channel SK designed for heavy-load areas up to load class F 900, featuring a robust design and liquid-tight connections.",
        features: [
            "Load classes up to F 900 (DIN EN 1433)",
            "Nominal widths: 100, 150, 200, 300",
            "Material: Polymer concrete with cast frame and cast iron grating",
            "Slimline design without compromising stability",
            "Liquid-tight channel trains and connections with ACO safety seam",
            "Compact and stable with reinforcing and anchoring ribs"
        ],
        applications: [
            "Motorways",
            "Runways and airfields at airports",
            "Container handling centres",
            "Industrial surfaces",
            "Logistics areas and routes",
            "Rest stops and service stations"
        ],
        packaging: "Channel elements in various heights and with optional integrated bottom gradients.",
        color: "Polymer concrete with cast iron grating",
        specSheet: "assets/ACO/PortandAirportDrainage/po1.pdf"
    },
    "ACO DRAIN® Monoblock RD": {
        name: "ACO DRAIN® Monoblock RD",
        solution: "Port and Airport Drainage",
        images: ["assets/ACO/PortandAirportDrainage/po2.png"],
        description: "Monocast channel design (trench body + grating) made of polymer concrete, with a narrow inflow slot and Drainlock® locking device.",
        features: [
            "Monocast channel design (trench body + grating)",
            "Inspection elements with grating and Drainlock®",
            "Load class D 400",
            "Narrow inflow slot (8-15 mm depending on model)",
            "Monolithic design prevents faulting and theft",
            "Easy and quick installation"
        ],
        applications: [
            "Intersections of footpaths with roads",
            "Line drainage systems"
        ],
        packaging: "One-piece design made of polymer concrete with grating.",
        color: "Polymer concrete",
        specSheet: "assets/ACO/PortandAirportDrainage/po2.pdf"
    },
    "SECANT®/SERVOKAT®-SEC Manhole Covers": {
        name: "SECANT®/SERVOKAT®-SEC Manhole Covers",
        solution: "Port and Airport Drainage",
        images: ["assets/ACO/PortandAirportDrainage/po4.png"],
        description: "Manhole cover systems offering flexibility and accessibility for various applications, including options with opening aids.",
        features: [
            "Classes B 125, M 125, D 400, SLW 60-25 km/h (SECANT®)",
            "Classes B 125, M 125, D 400, F 900 with opening aid (SERVOKAT®-SEC)",
            "Covers and frames can be combined",
            "Openings remain fully accessible",
            "Wide field of application (supply/disposal, material shafts, pumping stations, etc.)",
            "Optional single duct, multiple duct, or beam multiple cover units",
            "SERVOKAT®-SEC with opening aid for frequent operation"
        ],
        applications: [
            "Energy head offices",
            "Material shafts in operational premises",
            "Pumping stations",
            "Transformer plants",
            "Control shafts",
            "Rain water retention basins"
        ],
        packaging: "Varies by cover type (single duct, multiple duct, etc.)",
        color: "In-situ filling possible with various materials (concrete, asphalt, tiles)",
        specSheet: "assets/ACO/PortandAirportDrainage/po4.pdf"
    },

    // External Drainage Products
    "ACO DRAIN® Monoblock PD": {
        name: "ACO DRAIN® Monoblock PD",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex1.png"],
        description: "Monocast channel design (trench body + grating) made of natural or anthracite polymer concrete, Load class D400.",
        features: [
            "Monocast design prevents faulting and theft of the grating",
            "Quick and easy installation due to side structure (anchoring pockets) and monolithic design",
            "Optional sealing compounds for complete watertightness",
            "V profile for self-cleaning effect even in small drainage areas"
        ],
        applications: [
            "Intersections of footpaths with roads",
            "Line drainage systems"
        ],
        packaging: "Monoblock design",
        color: "Natural or anthracite polymer concrete",
        specSheet: "assets/ACO/ExternalDrainage/ex1.pdf"
    },
    "ACO S Range": {
        name: "ACO S Range",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex2.png"],
        description: "Heavy duty channel drainage system to Load Class F900, with cast iron edge rail, heavy duty grating and eight bolts per metre.",
        features: [
            "Heavy duty channel drainage system up to Load Class F900",
            "Cast iron edge rail for reinforcement",
            "Heavy duty grating secured with eight bolts per metre",
            "Excellent hydraulic performance"
        ],
        applications: [
            "Areas requiring heavy duty drainage"
        ],
        packaging: "Channels with internal widths 100mm (S100), 150mm (S150), 200mm (S200), and 300mm (S300)",
        color: "Not specified",
        specSheet: "assets/ACO/ExternalDrainage/ex2.pdf"
    },
    "ACO Brickslot": {
        name: "ACO Brickslot",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex3.png"],
        description: "Discreet slot drainage system with a range of gratings for architectural sites, compatible with various ACO DRAIN channels.",
        features: [
            "Discreet drainage design",
            "Available in stainless steel / galvanised steel",
            "Applications up to load class D400 (depending on channel body)",
            "Compatible with various ACO DRAIN channel bodies"
        ],
        applications: [
            "Architectural sites requiring discreet drainage"
        ],
        packaging: "Varies based on grating and channel",
        color: "Stainless steel / Galvanised steel",
        specSheet: "assets/ACO/ExternalDrainage/ex3.pdf"
    },
    "ACO SELF Range": {
        name: "ACO SELF Range",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex4.png"],
        description: "Residential drainage solutions designed for the private sector, combining quality performance with high design requirements.",
        features: [
            "Designed for the private sector",
            "Suitable for travel by passenger cars",
            "Various connection types available (sump unit, polymeric endcap, preform channel)",
            "Grids with screwless locking solution"
        ],
        applications: [
            "Residential areas",
            "Driveways"
        ],
        packaging: "Basic elements from polymer concrete",
        color: "Various grating materials and colors available",
        specSheet: "assets/ACO/ExternalDrainage/ex4.pdf"
    },
    "ACO Composite Manhole Covers": {
        name: "ACO Composite Manhole Covers",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex5.png"],
        description: "Composite manhole covers made from SMC resin, offering a low risk of theft, light weight, and high chemical resistance.",
        features: [
            "Low risk of theft",
            "Available in round and square top sections",
            "Light, Medium and Heavy load classes (A15 – E600)",
            "Low maintenance and easy installation",
            "High chemical and biological resistance",
            "Lightweight compared to concrete"
        ],
        applications: [
            "Pedestrian walkways and pedal cyclists",
            "Car parking decks",
            "Driveways",
            "Coastal areas",
            "Footpaths",
            "Residential areas",
            "Sewer & Storm water drains"
        ],
        packaging: "Various sizes and shapes",
        color: "Not specified",
        specSheet: "assets/ACO/ExternalDrainage/ex5.pdf"
    },
    "ACO Systems SA PointDrain Type 25": {
        name: "ACO Systems SA PointDrain Type 25",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex6.png"],
        description: "Durable point drain solution made from polymer concrete, suitable for pedestrian/light vehicle traffic applications.",
        features: [
            "Basin manufactured from polymer concrete",
            "Several outlet configurations for system flexibility",
            "Choice of grates for pedestrian or light vehicular traffic",
            "Outperforms HDPE in compressive strength and resistance to freeze-thaw cycles"
        ],
        applications: [
            "Gardens",
            "Patios",
            "Walkways",
            "Driveways"
        ],
        packaging: "Polymer concrete basin",
        color: "Not specified (grate material varies)",
        specSheet: "assets/ACO/ExternalDrainage/ex6.pdf"
    },
    "ACO Point Drainage": {
        name: "ACO Point Drainage",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex7.png"],
        description: "ACO DRAIN® point drains, including yard drains and road gullies, made from polymer concrete with cast iron components for various load classes.",
        features: [
            "Yard drain with polymer concrete body, cast iron frame and grid",
            "Road gully Combipoint protects mortar joints from traffic damage",
            "Boltless locking system (Pointlock)",
            "One-piece, permanently sealed gully (for some models)",
            "No mortar joints (for some models)"
        ],
        applications: [
            "Kerbs",
            "Traffic lanes",
            "Car parks and industrial surfaces",
            "School yards",
            "Pedestrian zones",
            "Roads, paths, piazzas",
            "Airports"
        ],
        packaging: "Varies by type (yard drain, road gully)",
        color: "Polymer concrete with cast iron",
        specSheet: "assets/ACO/ExternalDrainage/ex7.pdf"
    },
    "ACO External Drainage Self": {
        name: "ACO External Drainage Self",
        solution: "External Drainage",
        images: ["assets/ACO/ExternalDrainage/ex8.png"],
        description: "ACO Self® drainage designed for the private sector, combining quality with design, featuring screwless locking grids and polymer concrete channels.",
        features: [
            "Designed for the private sector",
            "Suitable for travel by private cars",
            "Basic elements from polymer concrete (frost resistant, high strength, smooth surface, V-profile)",
            "Screwless locking grids for easy installation and removal",
            "Sf groove for 100% sealed channel"
        ],
        applications: [
            "Around family homes",
            "Private driveways and gardens"
        ],
        packaging: "Polymer concrete channels",
        color: "Various grating materials (galvanised, stainless steel, cast iron, plastic) with different surface adjustments and painting shades.",
        specSheet: "assets/ACO/ExternalDrainage/ex8.pdf"
    },

    // Waste Water Management Technology Products
    "ACO Grease Separators": {
        name: "ACO Grease Separators",
        solution: "Waste Water Management Technology",
        images: ["assets/ACO/WasteWaterManagementTechnology/was1.png"],
        description: "Grease separators for the catering industry, hotel trade, and food production to pre-treat fatty wastewater and protect drainage systems.",
        features: [
            "Prevents pipes from becoming greasy",
            "Ensures operational safety of the kitchen drainage",
            "Mandatory in industrial and commercial environments with grease-polluted wastewater",
            "Manufactured and tested according to DIN EN 1124 (ACO PIPE system components)",
            "Optional corrosion-resistant materials: stainless steel 1.4301 or 1.4571"
        ],
        applications: [
            "Commercial kitchens",
            "Catering industry",
            "Hotel trade",
            "Food production facilities"
        ],
        packaging: "Varies by separator size and type",
        color: "Stainless Steel (optional)",
        specSheet: "assets/ACO/WasteWaterManagementTechnology/was1.pdf"
    },
    "ACO Light Oil Separators Coalisator-P": {
        name: "ACO Light Oil Separators Coalisator-P",
        solution: "Waste Water Management Technology",
        images: ["assets/ACO/WasteWaterManagementTechnology/was2.png"],
        description: "Separator systems for light oil, utilizing coalescence material, for use behind drainage points where mineral or light oils are present.",
        features: [
            "Essential where flammable oils or explosive atmospheres can develop",
            "Uses gravity separation and coalescence to remove light liquids",
            "Features automatic closing devices to prevent isolated light oils from reaching the drain (EN 858-2)",
            "Coalescence material aids in the bonding of small oil droplets"
        ],
        applications: [
            "Gas stations",
            "Parking areas, parking lots, roadways",
            "Washing areas, car wash facilities",
            "Workshops, vehicle recovery, scrap yards",
            "Transformer stations"
        ],
        packaging: "Varies by separator size and capacity",
        color: "Not specified",
        specSheet: "assets/ACO/WasteWaterManagementTechnology/was2.pdf"
    },
    "ACO Grease and Light Liquid Separators (Below Ground)": {
        name: "ACO Grease and Light Liquid Separators (Below Ground)",
        solution: "Waste Water Management Technology",
        images: ["assets/ACO/WasteWaterManagementTechnology/was3.png"],
        description: "ACO grease and light liquid separators for below-ground installation, ensuring solids and liquids that can cause harm are held back from sewage pipes.",
        features: [
            "Manufactured in accordance with EN 1825 (Grease) and EN 858 (Light Liquid)",
            "Hydraulically tested",
            "General Building Supervisory Authority Authorisation and/or DIBT Berlin approval",
            "Product stability guaranteed for 50 years (certified statics)",
            "Protection against upwelling and maximum groundwater level"
        ],
        applications: [
            "Commercial operations generating wastewater",
            "Below ground installation where pre-treatment is required"
        ],
        packaging: "Below ground installation units",
        color: "Not specified",
        specSheet: "assets/ACO/WasteWaterManagementTechnology/was3.pdf"
    }
}
}
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize banner slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Get modal elements
    const solutionsModal = document.getElementById('solutions-modal');
    const solutionProductsModal = document.getElementById('solution-products-modal');
    const productsModal = document.getElementById('products-modal');
    const productModal = document.getElementById('product-modal');
    const quoteModal = document.getElementById('quote-modal');

    // Get content containers
    const solutionsModalContent = document.getElementById('solutions-modal-content');
    const solutionProductsModalContent = document.getElementById('solution-products-modal-content');
    const productsModalContent = document.getElementById('products-modal-content');
    const productModalContent = document.getElementById('product-modal-content');

    // Get title elements
    const solutionsModalTitle = document.getElementById('solutions-modal-title');
    const solutionProductsModalTitle = document.getElementById('solution-products-modal-title');
    const productsModalTitle = document.getElementById('products-modal-title');
    const productModalTitle = document.getElementById('product-modal-title');

    // Close buttons
    const closeButtons = document.querySelectorAll('.close-modal');

    // Current state variables
    let currentPartner = null;
    let currentSolution = null;
    let currentProduct = null;

    // Close all modals function
    function closeAllModals() {
        solutionsModal.style.display = 'none';
        solutionProductsModal.style.display = 'none';
        productsModal.style.display = 'none';
        productModal.style.display = 'none';
        quoteModal.style.display = 'none';
    }

    // Add click event to close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });

    // Check if we need to automatically open a partner's solutions
    const selectedPartner = localStorage.getItem('selectedPartner');
    if (selectedPartner) {
        currentPartner = selectedPartner;
        loadSolutionsModal(selectedPartner);
        localStorage.removeItem('selectedPartner'); // Clear after use
    }

    // View solutions buttons
    const solutionsBtns = document.querySelectorAll('.solutions-btn');
    solutionsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const partnerId = this.getAttribute('data-partner');
            currentPartner = partnerId;
            loadSolutionsModal(partnerId);
        });
    });

    // View products buttons
    const productsBtns = document.querySelectorAll('.products-btn');
    productsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const partnerId = this.getAttribute('data-partner');
            currentPartner = partnerId;
            loadProductsModal(partnerId);
        });
    });

    // Load solutions modal with search functionality
    function loadSolutionsModal(partnerId) {
        const partner = partnersData[partnerId];

        if (!partner) return;

        // Set modal title
        solutionsModalTitle.textContent = `${partner.name} Solutions`;

        // Build solutions list with search bar
        let html = `
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search solutions..." id="solutions-search">
            </div>
            <div class="solutions-list" id="solutions-list-container">
        `;

        for (const [solutionId, solution] of Object.entries(partner.solutions)) {
            html += `
                <div class="solution-item" data-solution="${solutionId}" data-search="${solution.name.toLowerCase()} ${solution.description.toLowerCase()}">
                    <h4>${solution.name}</h4>
                    <p>${solution.description}</p>
                </div>
            `;
        }

        html += '</div>';
        solutionsModalContent.innerHTML = html;

        // Show modal
        solutionsModal.style.display = 'block';

        // Add search functionality
        const searchInput = document.getElementById('solutions-search');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const solutionItems = document.querySelectorAll('.solution-item');
            let hasResults = false;

            solutionItems.forEach(item => {
                const searchData = item.getAttribute('data-search');
                if (searchData.includes(searchTerm)) {
                    item.style.display = 'block';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });

            // Show no results message if needed
            const container = document.getElementById('solutions-list-container');
            if (!hasResults) {
                if (!document.querySelector('.no-results')) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.textContent = 'No solutions found matching your search.';
                    container.appendChild(noResults);
                }
            } else {
                const noResults = document.querySelector('.no-results');
                if (noResults) {
                    noResults.remove();
                }
            }
        });

        // Add click event to solution items
        const solutionItems = document.querySelectorAll('.solution-item');
        solutionItems.forEach(item => {
            item.addEventListener('click', function() {
                const solutionId = this.getAttribute('data-solution');
                currentSolution = solutionId;
                loadSolutionProductsModal(partnerId, solutionId);
            });
        });
    }

    // Load solution products modal with search functionality
    function loadSolutionProductsModal(partnerId, solutionId) {
        const partner = partnersData[partnerId];
        const solution = partner.solutions[solutionId];

        if (!partner || !solution) return;

        // Set modal title
        solutionProductsModalTitle.textContent = `${partner.name} - ${solution.name}`;

        // Build products grid with search bar
        let html = `
            <div class="solution-products-header">
                <a href="#" class="back-to-solutions"><i class="fas fa-arrow-left"></i> Back to Solutions</a>
                <span>${Object.keys(solution.products).length} Products</span>
            </div>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search products..." id="solution-products-search">
            </div>
            <div class="products-grid" id="solution-products-grid">
        `;

        for (const [productId, product] of Object.entries(solution.products)) {
            html += `
                <div class="product-card" data-product="${productId}" data-search="${product.name.toLowerCase()} ${product.description.toLowerCase()}">
                    <div class="product-image">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h5>${product.name}</h5>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        solutionProductsModalContent.innerHTML = html;

        // Close solutions modal and open products modal
        solutionsModal.style.display = 'none';
        solutionProductsModal.style.display = 'block';

        // Add search functionality
        const searchInput = document.getElementById('solution-products-search');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            let hasResults = false;

            productCards.forEach(card => {
                const searchData = card.getAttribute('data-search');
                if (searchData.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show no results message if needed
            const container = document.getElementById('solution-products-grid');
            if (!hasResults) {
                if (!document.querySelector('.no-results')) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.textContent = 'No products found matching your search.';
                    container.appendChild(noResults);
                }
            } else {
                const noResults = document.querySelector('.no-results');
                if (noResults) {
                    noResults.remove();
                }
            }
        });

        // Add click event to back button
        const backBtn = document.querySelector('.back-to-solutions');
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            solutionProductsModal.style.display = 'none';
            solutionsModal.style.display = 'block';
        });

        // Add click event to product cards
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                loadProductModal(partnerId, solutionId, productId);
            });
        });
    }

    // Load products modal with search functionality
    function loadProductsModal(partnerId) {
        const partner = partnersData[partnerId];

        if (!partner) return;

        // Set modal title
        productsModalTitle.textContent = `${partner.name} Products`;

        // Build products grid with search bar
        let html = `
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search products..." id="products-search">
            </div>
            <div class="products-grid" id="products-grid-container">
        `;

        for (const [productId, product] of Object.entries(partner.allProducts)) {
            html += `
                <div class="product-card" data-product="${productId}" data-search="${product.name.toLowerCase()} ${product.description.toLowerCase()} ${product.solution.toLowerCase()}">
                    <div class="product-image">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h5>${product.name}</h5>
                        <small>${product.solution}</small>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        productsModalContent.innerHTML = html;

        // Show modal
        productsModal.style.display = 'block';

        // Add search functionality
        const searchInput = document.getElementById('products-search');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            let hasResults = false;

            productCards.forEach(card => {
                const searchData = card.getAttribute('data-search');
                if (searchData.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show no results message if needed
            const container = document.getElementById('products-grid-container');
            if (!hasResults) {
                if (!document.querySelector('.no-results')) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.textContent = 'No products found matching your search.';
                    container.appendChild(noResults);
                }
            } else {
                const noResults = document.querySelector('.no-results');
                if (noResults) {
                    noResults.remove();
                }
            }
        });

        // Add click event to product cards
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                // Find which solution this product belongs to
                let solutionId = null;
                for (const [solId, solution] of Object.entries(partner.solutions)) {
                    if (solution.products[productId]) {
                        solutionId = solId;
                        break;
                    }
                }
                loadProductModal(partnerId, solutionId, productId);
            });
        });
    }

    // Load product detail modal
    function loadProductModal(partnerId, solutionId, productId) {
        const partner = partnersData[partnerId];
        let product = null;

        if (solutionId) {
            const solution = partner.solutions[solutionId];
            product = solution.products[productId];
        } else {
            product = partner.allProducts[productId];
        }

        if (!product) return;

        // Set current product
        currentProduct = product;

        // Set modal title
        productModalTitle.textContent = product.name;

        // Build product detail
        let html = `
            <div class="product-detail">
                <div class="product-gallery">
                    <div class="product-main-image">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="product-thumbnails">
        `;

        // Add thumbnails
        product.images.forEach((img, index) => {
            html += `
                <div class="product-thumbnail ${index === 0 ? 'active' : ''}" data-img="${img}">
                    <img src="${img}" alt="${product.name}">
                </div>
            `;
        });

        html += `
                    </div>
                </div>
                <div class="product-details">
                    <h4>${product.name}</h4>
                    <div class="product-meta">
                        <span><strong>Partner:</strong> ${partner.name}</span>
        `;

        if (solutionId) {
            html += ` | <span><strong>Solution:</strong> ${partner.solutions[solutionId].name}</span>`;
        }

        html += `
                    </div>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    <div class="product-features">
                        <h5>Key Features:</h5>
                        <ul>
        `;

        // Add features
        product.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });

        html += `
                        </ul>
                    </div>
                    <div class="product-actions">
                        <button class="action-btn primary-btn request-quote-btn">Request Quote</button>
                        ${product.specSheet ?
                            `<a href="${product.specSheet}" class="action-btn secondary-btn" download>Download Spec Sheet</a>` :
                            '<button class="action-btn secondary-btn" disabled>Spec Sheet Not Available</button>'}
                    </div>
                </div>
            </div>
        `;

        productModalContent.innerHTML = html;

        // Close current modal and open product modal
        if (solutionId) {
            solutionProductsModal.style.display = 'none';
        } else {
            productsModal.style.display = 'none';
        }
        productModal.style.display = 'block';

        // Add click event to thumbnails
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        const mainImage = document.querySelector('.product-main-image img');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Update main image
                const imgSrc = this.getAttribute('data-img');
                mainImage.src = imgSrc;

                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Add click event to request quote button
        const quoteBtn = document.querySelector('.request-quote-btn');
        if (quoteBtn) {
            quoteBtn.addEventListener('click', function() {
                showQuoteForm(partner, product);
            });
        }
    }

 function showQuoteForm(partner, product) {
  productModal.style.display = 'none';
  quoteModal.style.display = 'block';

  quoteModal.querySelector('.modal-content').innerHTML = `
    <span class="close-modal">&times;</span>
    <div class="quote-form">
      <h3>Get Quote</h3>
      <p>Tell us about your ${product.name} needs</p>

      <form id="quote-request-form">
        <input type="hidden" name="product" value="${product.name}">
        <input type="hidden" name="partner" value="${partner.name}">

        <div class="form-group">
          <label>Your Email*</label>
          <input type="email" name="email" required>
        </div>

        <div class="form-group">
          <label>What do you need?</label>
          <textarea name="requirements" required></textarea>
        </div>

        <div class="form-actions">
          <button type="button" class="action-btn secondary-btn close-quote-form">Cancel</button>
          <button type="submit" class="action-btn primary-btn">Send</button>
        </div>
      </form>
    </div>
  `;

  // Close button
  quoteModal.querySelector('.close-modal').addEventListener('click', closeAllModals);

  // Cancel button
  const cancelBtn = quoteModal.querySelector('.close-quote-form');
  cancelBtn.addEventListener('click', () => {
    closeAllModals();
    productModal.style.display = 'block';
  });

  // EmailJS submit handler
  const quoteForm = quoteModal.querySelector('#quote-request-form');
  quoteForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_idcwmqi", "template_dr73cow", {  // <-- Updated template ID here
      partner: this.partner.value,
      product: this.product.value,
      email: this.email.value,
      requirements: this.requirements.value
    }).then(function(response) {
      alert("✅ Quote request sent successfully!");
      closeAllModals();
      productModal.style.display = 'block';
    }, function(error) {
      alert("❌ Failed to send quote request: " + JSON.stringify(error));
    });
  });


    }
});