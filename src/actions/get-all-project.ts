import connectDB from "@/config/database"; // Assurez-vous que le chemin est correct
import ProjectSchema from "@/models/project-models"; // Importez votre modèle de projet

export const getAllProject = async (): Promise<any[]> => {
    try {
        await connectDB();
        
        // Essaie de récupérer tous les projets sans filtre
        const courses = await ProjectSchema.find();

        return courses;
    } catch (error) {
        console.error('[GET_COURSES_ERROR]', error);
        return [];
    }
};

