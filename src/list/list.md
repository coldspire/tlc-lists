---
layout: list.liquid
pagination:
  data: lists
  size: 1
  alias: listId
permalink: "{{ listId | slugify }}/index.html"
eleventyComputed:
  docTitle: "List - {{ lists[listId].title }}"
---

{% assign list = lists[listId] %}

<header>
    <h1>List: {{ list.title }}</h1> 
</header>

<section class="description">
    {%- for line in list.description -%}
    {{ line | renderContent: "md" }}
    {%- endfor -%}
</section>

<section class="list__container">
    {%- if list.isCountdown -%}
    <input type="checkbox" id="is-countdown" checked>
    <label for="is-countdown">Count down</label>
    {%- endif -%}

    <ol class="list list--ascending">
    {%- for item in list.items -%}
    <li class="list__item">
        <p class="text--primary">{{ item.primary }}</p>
        <p class="text--secondary">{{ item.secondary }}</p>
        <div class="text--additional">{{ item.additionalText | renderContent: "md" }}</div>
    </li>
    {%- endfor -%}
    </ol>

    {%- if list.isCountdown -%}
    <!-- To show the countdown list, we write out the list twice, a second time here with the items reversed. -->
    <!-- Flipping between the lists is controlled by a checkbox and CSS styles. -->
    <!-- This doubles the markup, but we avoid use of JavaScript this way. -->
    <ol class="list list--descending" reversed>
    {% assign listItemsReversed = list.items | reverse %}
    {%- for item in listItemsReversed -%}
    <li class="list__item">
        <p class="text--primary">{{ item.primary }}</p>
        <p class="text--secondary">{{ item.secondary }}</p>
        <div class="text--additional">{{ item.additionalText | renderContent: "md" }}</div>
    </li>
    {%- endfor -%}
    </ol>
    {%- endif -%}

</section>

<footer>
    <a href="/lists/">Back to index</a>
</footer>
