<template>
  <div class="columns">
      <div v-for="node in $static.metadata.githubData.repositoryOwner.repositories.nodes" :key="node.id" class="column is-one-third-tablet is-one-quarter-desktop">
        <div class="card">
            <header class="card-header has-background-light">
                <a :href="node.url" :title="node.nameWithOwner" target="_blank"><span class="card-header-title">{{ node.nameWithOwner }}</span></a>
            </header>
            <div class="card-content">
                <div class="content">
                    <div>{{ node.description }}</div>
                    <br>
                    <a v-for="topic in node.repositoryTopics.nodes" :key="topic.id" :href="topic.url" :title="topic.topic.name" target="_blank">#{{ topic.topic.name }} </a>
                    <p class="subtitle is-7">Last pushed on {{ node.pushedAt | dateParse('YYYY-MM-DD HH:mm:ss') | dateFormat('MMM D, YYYY') }}</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<static-query>
query {
  metadata {
    githubData{
      repositoryOwner {
        repositories {
            nodes {
                pushedAt
                id
                nameWithOwner
                description
                url
                repositoryTopics {
                    nodes {
                        id
                        url
                        topic {
                            name
                        }
                    }
                }
            }
        }
      }
    }
  }
}
</static-query>

<script>
export default {
    name: 'GithubRepository'
}
</script>