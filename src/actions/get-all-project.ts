import connectDB from "@/config/database";
import ProjectSchema from "@/models/project-models";

export const getAllProject = async (): Promise<any[]> => {
  try {
    await connectDB();

    const courses = await ProjectSchema.find().sort({ order: 1 });

    return courses;
  } catch (error) {
    console.error("[GET_COURSES_ERROR]", error);
    return [];
  }
};
