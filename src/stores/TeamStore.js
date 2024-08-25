import { defineStore } from "pinia";

export const useTeamStore = defineStore('team', {
  id: "team",
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),
  actions: {
    async fill() {
      const response = await import("@/team.json");
      this.$state = response.default;
      // other way to update state
      // const data = response.default;
      // this.$patch({
      //   name: data.name,
      //   spots: data.spots,
      //   members: data.members,
      // });
    },
    grow(spots) {
      this.spots = spots;
    }
  },
  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    }
  }
});
