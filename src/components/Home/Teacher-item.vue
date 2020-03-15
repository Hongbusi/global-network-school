<template>
  <div class="teacher-item left">
    <router-link to="/no">
      <div>
        <img
          :src="teacher.picUrl"
        />
      </div>
      <p>
        <span>{{teacher.name}}</span>
        <i>{{teacher.tag}}</i>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.teacher-item {
  width: 236px;
  height: 344px;
  padding-bottom: 26px;
}

.teacher-item a div {
  width: 236px;
  height: 274px;
  overflow: hidden;
}

.teacher-item a div img {
  width: 236px;
  height: 274px;
  transition: all 0.4s ease-in-out;
}

.teacher-item a div img:hover {
  transform: scale(1.1);
}

.teacher-item a p {
  text-align: center;
  padding: 14px 0 14px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.teacher-item a p:hover span,
.teacher-item a p:hover i {
  color: #649cf0 !important;
}

.teacher-item a p span {
  font-size: 16px;
  color: #191921;
  margin-right: 10px;
}

.teacher-item a p i {
  font-weight: 400;
  font-size: 12px;
  color: #9598a2;
  font-style: normal;
}
</style>