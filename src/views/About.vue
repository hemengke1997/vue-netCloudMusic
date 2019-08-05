<template>
  <div class="about ignore">
    <h1>This is an about page</h1>
    <div aspectratio w-188-246 aspect-ratio="750/250">
      <div aspectratio-content></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  border: .5px solid #000;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 20px;
  background-color: pink;
}
.ignore {
  color: red;
  margin: 10px;
}
[aspectratio] {
    position: relative;
}
[aspectratio]::before {
    content: '';
    display: block;
    width: 1px;
    margin-left: -1px;
    height: 0;
}

[aspectratio-content] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
[w-188-246] {
  width: 188px;
  background-color: red;
  aspect-ratio: '188:246';
}
</style>
