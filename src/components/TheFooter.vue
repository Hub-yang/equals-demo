<script setup lang="ts">
import { Octokit } from '@octokit/core'

const active = ref(false)
async function handleStar() {
  if (active.value)
    return
  const repoOwner = 'Hub-yang'
  const repoName = 'equals-demo'
  const accessToken = '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'
  const octokit = new Octokit({
    auth: accessToken,
  })
  const res = await octokit.request('PUT /user/starred/{owner}/{repo}', {
    owner: repoOwner,
    repo: repoName,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  if (res && res?.status === 204)
    active.value = true
}
</script>

<template>
  <nav mb-10 h-10 w-full flex-center gap-4 text-xl>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/Hub-yang"
    />

    <button icon-btn @click="handleStar">
      <div :class="[active ? 'i-carbon:star-filled' : 'i-carbon:star']" />
    </button>
  </nav>
</template>
