import { createStore } from "vuex";
import axios from "axios"; // Import axios

const apiUrl = "http://127.0.0.1:8000/api"; // Replace this with your actual API base URL

const store = createStore({
  state: {
    students: [],
  },
  getters: {
    students: (state) => state.students,
  },
  mutations: {
    setStudents(state, student) {
      state.students = student;
    },
    addStudent(state, student) {
      state.students.push(student);
    },
    deleteStudent(state, id) {
      state.students = state.students.filter((student) => student.id !== id);
    },
  },
  actions: {
    async fetchStudents({ commit }) {
      try {
        // Set loading state to true
        const response = await axios.get(apiUrl + "/students");
        // Commit mutation to set students data
        commit("setStudents", response.data);
        // Set loading state to false
      } catch (error) {
        console.error("Error fetching students:", error);
        // Set loading state to false in case of error
      }
    },
    async addStudent({ commit }, newStudent) {
      try {
        const response = await axios.post(apiUrl + "/students", newStudent);
        commit("addStudent", response.data);
      } catch (error) {
        console.error("Error adding student:", error);
      }
    },
    async deleteStudent({ commit }, id) {
      try {
        await axios.delete(apiUrl + "/students/" + id);
        commit("deleteStudent", id);
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    },
  },
});

export default store;
