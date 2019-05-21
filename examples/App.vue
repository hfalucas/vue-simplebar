<template>
<div>
    <h2>Scroll Up & Down</h2>
    <vue-simplebar ref="scroll" class="container" @scroll-y-reach-end="YEnd++" @scroll-y-reach-start="YStart++">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at mi convallis, tempus ex eget, condimentum
            metus. Duis finibus nisi et pharetra blandit. Pellentesque rutrum, nibh at dictum vehicula, ligula turpis
            porta magna, at sodales nulla est eu leo. Vestibulum laoreet risus eros, sit amet eleifend ex cursus vitae.
            Ut lorem nulla, suscipit quis mauris eu, condimentum pellentesque eros. Integer in tortor eleifend, porta
            metus ut, facilisis neque. Sed euismod nibh metus, a molestie nisl pulvinar non. Donec tortor nisi,
            hendrerit vel facilisis quis, auctor non leo. Fusce quis elit sit amet elit finibus dictum.
            Phasellus eget tellus libero. Vivamus rutrum leo rhoncus enim aliquet, id imperdiet tortor ultricies.
            Sed ac nunc non elit semper egestas. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris at mi convallis, tempus ex eget, condimentum metus. Duis finibus nisi et pharetra blandit.
            Pellentesque rutrum, nibh at dictum vehicula, ligula turpis porta magna, at sodales nulla est eu leo.
            Vestibulum laoreet risus eros, sit amet eleifend ex cursus vitae. Ut lorem nulla, suscipit quis mauris eu,
            condimentum pellentesque eros. Integer in tortor eleifend, porta metus ut, facilisis neque. Sed euismod nibh metus,
            a molestie nisl pulvinar non. Donec tortor nisi, hendrerit vel facilisis quis, auctor non leo. Fusce quis elit
            sit amet elit finibus dictum. Phasellus eget tellus libero. Vivamus rutrum leo rhoncus enim aliquet, id
            imperdiet tortor ultricies. Sed ac nunc non elit semper egestas. Nulla facilisi.
        </p>
    </vue-simplebar>
    <div class="event-listener">
        <div class="event-label">
            <p><strong>Scroll reached the TOP of Y axis:</strong> {{YStart}}</p>
            <button type="button" @click="scrollTop">Scroll Top</button>
        </div>
        <div class="event-label">
            <p><strong>Scroll reached the BOTTOM of Y axis:</strong> {{YEnd}}</p>
            <button type="button" @click="scrollBottom">Scroll Bottom</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'example',

    data: () => ({
        YStart: 0,
        YEnd: 0
    }),

    methods: {
        scrollTop () {
            this.$refs.scroll.scrollTop()
        },
        scrollBottom () {
            this.$refs.scroll.scrollBottom()
        }
    }
}
</script>

<style>
html, body { height: 100%; }

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: center;
}

.container {
    width: 770px !important;
    height: 128px !important;
    border: 1px solid #e8e8e8;
    padding: 12px;
}

p { margin: 0; padding: 0; }

.event-listener {
    display: flex;
    justify-content: space-around;
    padding: 12px;
}

.event-label {
    display: flex;
    flex-direction: column;
}
</style>
