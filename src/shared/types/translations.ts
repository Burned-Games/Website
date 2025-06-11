export interface TranslationType {
    // Global Navigation
    navigation: {
        home: string;
        about: string;
        downloads: string;
        engine: string;
        media: string;
        game: string;
    };

    // Global UI Elements
    general: {
        company: string;
        loading: string;
        close: string;
        back: string;
        altTexts: {
            teamLogo: string;
            gameLogo: string;
            defaultAvatar: string;
        };
    };

    // Home Page
    home: {
        title?: string;
        subtitle: string;
        description?: string;
        playButton: string;
    };

    // About Page
    about: {
        title: string;
        subtitle: string;
        description?: string;
        team?: {
            title: string;
            subtitle?: string;
        };
        teamSection?: {
            title: string;
            filters: {
                allDepartments?: string;
                allMembers: string;
            };
        };
    };

    // Downloads Page
    downloads: {
        title: string;
        subtitle: string;
        description?: string;
        platforms: {
            windows: string;
            linux: string;
        };
        systemSpecs: {
            title?: string;
            os: string;
            processor: string;
            memory: string;
            graphics: string;
            storage: string;
        };
        downloadButton: string;
        buttons?: {
            download: string;
            viewOnGithub: string;
        };
    };

    // Media Page
    media: {
        title: string;
        subtitle: string;
        sections?: {
            characters: {
                title: string;
                subtitle: string;
            };
            environments: {
                title: string;
                subtitle: string;
            };
        };
        gallery: {
            characters: string;
            environments: string;
            previous?: string;
            next?: string;
            close?: string;
            openFullscreen?: string;
        };
    };

    // Game Page
    game: {
        title: string;
        subtitle: string;
        description?: string;
        loading?: string;
        features?: {
            title: string;
            items: string[];
        };
        catchphrase?: {
            line1: string;
            line2: string;
        };
        mainDescription?: string;
        videoCaption?: string;
        pillars?: {
            heading: string;
            worldExploration: {
                title: string;
                description: string;
            };
            diabloLike: {
                title: string;
                description: string;
            };
            fastPaced: {
                title: string;
                description: string;
            };
            ownEngine: {
                title: string;
                description: string;
            };
        };
        lore?: {
            heading: string;
            paragraph1: string;
            paragraph2: string;
        };
        ultramarine?: {
            heading: string;
            character: {
                title: string;
                description: string;
            };
            weapons: {
                title: string;
                description: string;
                list: {
                    chainsword: {
                        name: string;
                        description: string;
                    };
                    shotgun: {
                        name: string;
                        description: string;
                    };
                    bolter: {
                        name: string;
                        description: string;
                    };
                };
            };
            abilities: {
                title: string;
                description: string;
                list: {
                    dash: {
                        name: string;
                        description: string;
                    };
                    rifleSpecial: {
                        name: string;
                        description: string;
                    };
                    shotgunSpecial: {
                        name: string;
                        description: string;
                    };
                    armorSpecial: {
                        name: string;
                        description: string;
                    };
                };
            };
        };
        enemies?: {
            heading: string;
            description: string;
            button: string;
        };
        levels?: {
            heading: string;
            description: string;
            button: string;
        };
        controls?: {
            heading: string;
            movement: string;
            lookAround: string;
            primaryAttack: string;
            secondaryAttack: string;
            jumpDodge: string;
            run: string;
            interact: string;
            inventory: string;
        };
        coffeeEngine?: {
            heading: string;
            description: string;
            button: string;
        };
        screenshots?: {
            heading: string;
        };
        altTexts?: {
            ultramarineCharacter: string;
            gameEnemies: string;
            gameLevels: string;
            coffeeEngine: string;
            gameScreenshot: string;
        };
        videoError?: string;
    };

    // Enemies Page
    enemies: {
        title: string;
        subtitle: string;
        description: string;
        backButton: string;
        types: {
            heading: string;
        };
        abilities: {
            heading: string;
        };
        gallery: {
            heading: string;
        };
        challenge: {
            heading: string;
            description: string;
            button: string;
        };
    };

    // Levels Page
    levels: {
        title: string;
        subtitle: string;
        description: string;
        backButton: string;
        environments: {
            heading: string;
        };
        features: {
            heading: string;
        };
        progression: {
            heading: string;
        };
        gallery: {
            heading: string;
        };
        mission: {
            heading: string;
            description: string;
            button: string;
        };
    };

        // Game Page
    engine: {
        title: string;
        subtitle: string;
        description?: string;
        playButton: string;
        loading?: string;
        features?: {
            title: string;
            items: string[];
        };
    };

    // Member Info (agregado)
    memberInfo?: {
        sections: {
            about: string;
            skills: string;
            portfolio: string;
        };
        social: {
            github: string;
            linkedin: string;
            portfolio: string;
        };
    };

    // Components (agregado)
    components?: {
        header: {
            backToHome: string;
        };
        gallery: {
            viewLarger: string;
            loadingError: string;
            noImages: string;
        };
        table: {
            noData: string;
            loading: string;
        };
    };

    // Global Footer
    footer: {
        copyright: string;
        rights?: string;
        links?: {
            privacy: string;
            terms: string;
            contact: string;
        };
    };

    // Error Messages
    errors: {
        notFound: string;
        general: string;
        loading?: string;
        tryAgain?: string;
    };
}