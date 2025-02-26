const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

// 生成动态进度条图片URL
function getProgressBar(percent) {
  // 使用渐变参数（从红到紫的彩虹渐变）
  const gradientParams = [
    'type=gradient',          // 启用渐变模式
    'gradient=ff0000,8f00ff', // 从红色到紫色
    'steps=7'                 // 七色渐变
  ].join('&');

  return `https://progress-bar.dev/${percent}/?\
&title=Year+Progress\
&width=600\
&suffix=%25\
&${gradientParams}`;
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %


⏰ Updated on ${new Date().toUTCString()}

![Time bat](https://img.shields.io/badge/TimeBar-v1.0-red.svg)\

---

![Year Progress](${getProgressBar(progressOfThisYear * 100)})

`

console.log(readme)
