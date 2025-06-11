class AssetManager {
    private basePath: string;

    constructor() {
        this.basePath = process.env.PUBLIC_URL || '';
    }

    // Métodos para diferentes tipos de assets
    image(filename: string): string {
        return `${this.basePath}/assets/images/${filename}`;
    }

    video(filename: string): string {
        return `${this.basePath}/assets/videos/${filename}`;
    }

    model(filename: string): string {
        return `${this.basePath}/assets/models/${filename}`;
    }

    icon(filename: string): string {
        return `${this.basePath}/assets/icons/${filename}`;
    }

    font(filename: string): string {
        return `${this.basePath}/assets/fonts/${filename}`;
    }

    data(path: string): string {
        return `${this.basePath}/data/${path}`;
    }

    // Assets específicos predefinidos
    get images() {
        return {
            logo: this.image('logo.png'),
            logoWebp: this.image('logo.webp'),
            gameLogo: this.image('TLM_Logo.webp'),
            coffeEngineLogo: this.image('coffe_engine_logo.webp'),
            linux: this.image('linux.png'),
            windows: this.image('windows.png'),
            borderMember: this.image('border_member.webp'),
            separator: this.image('separator.webp'), 
            corner: this.image('corner.webp'),
            controls: this.image('controles.webp'),
            dossierBackground: this.image('dossier_background.webp'),
            gameBackground: this.image('gameBackground.webp'),
            gameBackgroundMobile: this.image('gameBackground_mobile.webp'),
            cardName: this.image('cardName.webp'),
            // Logos de departamentos
            departmentLogos: {
                code: this.image('department-code-logo.webp'),
                engine: this.image('department-engine-logo.webp'),
                production: this.image('department-production-logo.webp'),
                art: this.image('department-art-logo.webp'),
                design: this.image('department-design-logo.webp')
            },
            // Estandartes de departamentos
            departmentBanners: {
                code: this.image('EstandarteCode.webp'),
                production: this.image('EstandarteProdu.webp'),
                art: this.image('EstandarteArte.webp'),
                design: this.image('EstandarteDesign.webp')
            },
            // Game screenshots
            gameScreenshots: {
                screenshot1: this.image('screenshot1.webp'),
                screenshot2: this.image('screenshot2.webp'),
                screenshot3: this.image('screenshot3.webp'),
                screenshot4: this.image('screenshot4.webp')
            },
            // Weapons
            weapons: {
                bolter: this.image('arma.webp'),
                shotgun: this.image('shotgun.webp'),
                chainsaw: this.image('Motosierra.webp')
            },
        };
    }

    get videos() {
        return {
            background: this.video('background.mp4'),
            gameSinopsis: this.video('cinematica2.mp4'),
            spaceMarine: this.video('SpaceMarine.mp4'),
        };
    }

    get models() {
        return {
            pipes: this.model('P_pipes_1/P_Pipes_1.gltf'),
        };
    }

    get fonts() {
        return {
            dossierTitle: {
                woff2: this.font('Muleno.woff2'),
            }
        };
    }

    // Método específico para dossiers
    dossier(memberId: string, filename: string): string {
        return this.data(`dossier/${memberId}/${filename}`);
    }
}

export const assets = new AssetManager();
export default assets;