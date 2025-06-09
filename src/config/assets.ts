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
            linux: this.image('linux.png'),
            windows: this.image('windows.png'),
            borderMember: this.image('border_member.webp'),
            separator: this.image('separator.webp'), 
            corner: this.image('corner.webp'),
            dossierBackground: this.image('dossier_background.webp'),
            cardName: this.image('cardName.webp'),
            // Logos de departamentos
            departmentLogos: {
                code: this.image('department-code-logo.webp'),
                engine: this.image('department-engine-logo.webp'),
                production: this.image('department-engine-logo.webp'),
                art: this.image('department-art-logo.webp'),
                design: this.image('department-design-logo.webp')
            }
        };
    }

    get videos() {
        return {
            background: this.video('background.mp4'),
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