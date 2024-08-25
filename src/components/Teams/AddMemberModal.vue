<script setup>
import Modal from "@/components/Modal.vue";
import { useTeamStore } from "@/stores/TeamStore";
import { ref } from "vue";

const showModal = ref(false);
const toggleModdal = () => showModal.value = !showModal.value;
const team = useTeamStore();
</script>

<template>
    <button
      @click="toggleModdal()"
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="!team.spotsRemaining"
    >
      Add Member ({{ team.spotsRemaining }} Spots Left)
    </button>

    <!-- Teleport at the end of the body as a good practice -->
    <Teleport to="body">
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
  </Teleport>
</template>
