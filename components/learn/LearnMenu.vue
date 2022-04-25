<template>
  <div>
    <aside class="learn-menu">
      <nav id="sideMenu" class="left-transform right-transform">
        <ul class="learn-menu-content">
          <li
            v-for="(cat, index) of categories"
            :key="cat.id"
            class="learn-menu-item"
          >
            <LearnMenuToggle :category="cat" :index="index" />
            <!-- <div
            :id="index"
            class="learn-menu-title{{ if $currentPage.HasMenuCurrent &quot;learn&quot; . }} active{{ end }}"
          >
            <img
              src="{{.Pre}}"
              width="26"
              height="26"
              alt="{{.Name}}"
            >
            {{.Name}}
          </div>
          <ul
            id="learn-menu-{{$index}}"
            class="learn-menu-sub {{ if $currentPage.HasMenuCurrent &quot;learn&quot; . }}menu-display{{ end }}"
          >
            {{ range .Children }} {{ $has := $currentPage.IsMenuCurrent "learn" . }}
            <li class="learn-menu-sub-item {{if $has}}active{{end}}">
              <a href="{{.URL}}">
                {{ partial "docs-title" . }}
              </a>
            </li>
            {{ end }}
          </ul>-->
          </li>
        </ul>
      </nav>
      <div class="learn-menu-mobile-right-space" />
    </aside>
  </div>
</template>

<script>
import LearnMenuToggle from './LearnMenuToggle'

export default {
  name: 'LearnMenu',
  components: { LearnMenuToggle },
  computed: {
    categories() {
      const subMenuItems = this.$static.allLearn.edges
        .filter((node) => node.weight !== null)
        .reduce((topLevelItems, learn) => {
          const parent = learn.node.menu?.learn?.parent
          if (parent) {
            if (!topLevelItems[parent]) topLevelItems[parent] = []
            learn.node.category = parent
            topLevelItems[parent].push(learn.node)
          }
          return topLevelItems
        }, {})

      return subMenuItems
    },
  },
}
</script>
