<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header>
      <q-toolbar>
        <q-toolbar-title align="center"> PC4Me - Quotation </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-toolbar>
        <q-toolbar-title align="end">
          {{date_time}}
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
export default {
  name: 'LoginLayout',
  computed:{ 
    date_time(){
      // return moment().format("MM ddd, YYYY hh:mm:ss a")
      return moment().format("DD-MM-YYYY")
    }
  }
};
</script>
