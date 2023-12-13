interface Dessert {
    name: string;
    flavors: string[];
    sauces: string[];
}

class DessertFactory {
    static scoopersChoice(): Dessert {
        const flavors = ScoopersChoice.getFlavors();
        const sauces = ScoopersChoice.getSauces();
        const dessert: Dessert = {
            name: `${flavors.join(" ")} ice cream`,
            flavors: flavors,
            sauces: sauces
        };
        return dessert;
    }

    static blueberryBasil(): Dessert {
        const dessert: Dessert = {
            name: 'Blueberry Basil ice cream',
            flavors: ['basil'],
            sauces: ['blueberry jam']
        };
        return dessert;
    }

    static bubblegumMatcha(): Dessert {
        const dessert: Dessert = {
            name: 'Bubblegum Matcha ice cream',
            flavors: ['bubblegum balls'],
            sauces: ['maple syrup']
        };
        return dessert;
    }

    static lavenderEarlGrey(): Dessert {
        const dessert: Dessert = {
            name: 'Lavender Earl Grey ice cream',
            flavors: ['lavender', 'earl grey'],
            sauces: ['honey drizzle']
        };
        return dessert;
    }

    static roseCardamom(): Dessert {
        const dessert: Dessert = {
            name: 'Rose Cardamom ice cream',
            flavors: ['rose', 'cardamom'],
            sauces: ['whipped cream']
        };
        return dessert;
    }
}

class ScoopersChoice {
    static flavors = [
        "matcha",
        "chai",
        "lavender",
        "rose",
        "earl grey",
        "peppermint",
        "cinnamon",
        "ginger",
        "cardamom",
        "basil"
    ];

    static getFlavors(): string[] {
        const numberOfFlavors = 4;
        const flavors = new Set<string>();
        while (flavors.size < numberOfFlavors) {
            const randomIndex = Math.floor(Math.random() * ScoopersChoice.flavors.length);
            flavors.add(ScoopersChoice.flavors[randomIndex]);
        }
        return Array.from(flavors);
    }

    static sauces = [
        "chocolate fudge",
        "salted caramel",
        "strawberry compote",
        "blueberry jam",
        "raspberry coulis",
        "honey drizzle",
        "maple syrup",
        "whipped cream",
        "toasted coconut flakes",
        "crushed pistachios"
    ];

    static getSauces(): string[] {
        const numberofSauces = 2;
        const sauces = new Set<string>();
        while (sauces.size < numberofSauces) {
            const randomIndex = Math.floor(Math.random() * ScoopersChoice.sauces.length);
            sauces.add(ScoopersChoice.sauces[randomIndex]);
        }
        return Array.from(sauces);
    }
}
