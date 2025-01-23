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

# List: {{ list.title }}

<section class="description">
    {%- for line in list.description -%}
    {{ line | renderContent: "md" }}
    {%- endfor -%}
</section>

<section class="list__container">
    {%- if list.isCountdown -%}
    {% assign listItems = list.items | reverse %}
    {%- else -%}
    {% assign listItems = list.items %}
    {%- endif -%}

    {%- if list.isCountdown -%}
    <p class="text--italic">This list counts down. <a href="#list-item-1">Start from the top</a>.</p>
    {%- endif -%}

    <ol class="list {% if list.isCountdown %}list--countdown{% endif %}" 
        {%- if list.isCountdown -%} reversed {%- endif -%}
    >
        {%- for item in listItems -%}
        <li class="list__item" id="list-item-{{ forloop.index }}">
            <div class="list__item__container">
                <div data-words-box>
                    <p class="text--primary">{{ item.primary }}</p>
                    <p class="text--secondary">{{ item.secondary }}</p>
                </div>
                <div data-words-box class="text--additional">
                    {{ item.additionalText | renderContent: "md" }}
                </div>
            </div>                
            <p>                    
                {%- if list.isCountdown and not forloop.last -%}
                    <a href="#list-item-{{ forloop.index | plus: 1 }}">See next</a></p>
                {%- endif -%}
            </p>
        </li>
        {%- endfor -%}
    </ol>
</section>

<footer>
    <a href="/lists/">Back to index</a>
</footer>
