<template>
  <main text="center" min-h-100vh min-w-100vw bg-gray:10 font="sans bold">
    <div pt-10>
      <div ma w-fit flex items-center>
        <ValueTable />
        <div ml-10>
          <div w-fit flex="~ justify-center gap-2">
            <span i-ic:round-not-equal inline-block h-6 w-6 color-green />
            <span>不相等</span>
          </div>
          <div w-fit flex="~ justify-center gap-2">
            <span i-mdi:approximately-equal inline-block h-6 w-6 color-blue />
            <span>宽松相等</span>
          </div>
          <div w-fit flex="~ justify-center gap-2">
            <span i-ic:round-equals inline-block h-6 w-6 color-red />
            <span>严格相等</span>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
  </main>
</template>
