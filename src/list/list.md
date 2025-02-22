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
    <p class="text--italic">This list counts down.</p>
    {%- else -%}
    {% assign listItems = list.items %}
    {%- endif -%}

    <ol class="list" {%- if list.isCountdown -%} reversed {%- endif -%}>
    {%- for item in listItems -%}
    <li class="list__item">
        <div class="list__item__container">
            <div data-words-box data-item-essential>
                <p class="text--primary">{{ item.primary }}</p>
                <p class="text--secondary">{{ item.secondary }}</p>
            </div>
            <div data-words-box class="text--additional">
                {{ item.additionalText | renderContent: "md" }}
            </div>
        </div>
    </li>
    {%- endfor -%}
    </ol>
</section>

{% if list.supplements %}
{% for suppList in list.supplements %}

<h2>{{ suppList.name }}</h2>

{%- if suppList.description -%}
<section class="description">
    {%- for line in suppList.description -%}
    {{ line | renderContent: "md" }}
    {%- endfor -%}
</section>
{%- endif -%}

<section class="list__container">
    <ul class="list">
    {%- for item in suppList.items -%}
    <li class="list__item item-exclusion">
        <div class="list__item__container">
            <div data-words-box data-item-essential>
                <p class="text--primary">{{ item.primary }}</p>
                <p class="text--secondary">{{ item.secondary }}</p>
            </div>
            <div data-words-box class="text--additional">
                {{ item.additionalText | renderContent: "md" }}
            </div>
        </div>
    </li>
    {%- endfor -%}
    </ul>
</section>

{% endfor %}
{% endif %}

<footer>
    <a href="/lists/">Back to index</a>
</footer>
