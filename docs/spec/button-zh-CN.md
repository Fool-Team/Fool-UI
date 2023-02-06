## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。


<template>
	<fool-button icon="bluetoothon"></fool-button>
	<fool-button type="primary" icon="camera">照相机</fool-button>
	<fool-button type="success" icon="course"></fool-button>
	<fool-button type="info" icon="bluetooth_link"></fool-button>
	<fool-button type="danger" icon="addto"></fool-button>
	<fool-button type="warning" icon="audio"></fool-button>
	<fool-button type="primary" @click="visible = true">dialog开关</fool-button>
</template>
