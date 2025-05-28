export interface TranslationType {
    // Global Navigation
    navigation: {
        home: string;
        about: string;
        downloads: string;
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
        title: string;
        subtitle: string;
        description: string;
        playButton: string;
    };

    // About Page
    about: {
        title: string;
        subtitle: string;
        description: string;
        team: {
            title: string;
            subtitle: string;
        };
    };

    // Downloads Page
    downloads: {
        title: string;
        subtitle: string;
        description: string;
        // System Requirements Section
        platforms: {
            windows: string;
            linux: string;
        };
        systemSpecs: {
            os: string;
            processor: string;
            memory: string;
            graphics: string;
            storage: string;
        };
        // Download Actions
        downloadButton: string;
        buttons: {
            download: string;
            viewOnGithub: string;
        };
    };

    // Media Page
    media: {
        title: string;
        subtitle: string;
        gallery: {
            characters: string;
            environments: string;
        };
    };

    // Game Page
    game: {
        title: string;
        subtitle: string;
        description: string;
        features: {
            title: string;
            items: string[];
        };
    };

    // Global Footer
    footer: {
        copyright: string;
        rights: string;
    };

    // Error Messages
    errors: {
        notFound: string;
        general: string;
    };
}