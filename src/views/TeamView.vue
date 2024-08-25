<script setup>
import Modal from "@/components/Modal.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import { useTeamStore } from "@/stores/TeamStore";
import { ref } from "vue";

const team = useTeamStore();
team.fill();
// setTimeout(() => {
//   team.grow(10);
// }, 2000);

const showModal = ref(false);
const toggleModdal = () => showModal.value = !showModal.value;
</script>

<template>
  <TeamHeader @add="toggleModdal()"/>

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal
    :show="showModal"
    @close="toggleModdal()"
  >
    <template #header>
      <h2>Add Team Member</h2>
    </template>
    <template #default>
      <p>Need to add a new member to your team?</p>
      <form>
        <input type="text" placeholder="Name" class="w-full p-2 border border-gray-200 rounded mt-2" />
        <input type="email" placeholder="Email" class="w-full p-2 border border-gray-200 rounded mt-2" />
        <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded mt-2">Add Member</button>
      </form>
    </template>
  </Modal>
</template>
