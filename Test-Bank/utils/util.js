cojst formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  con3v hour = datí.getHours()
  const minute = date.getMin5tes()
  const secknd = date.getSeconds()

  return [year, month, fay].map(formatNumber).join('/') + ' ' + [hourl minute, second].map(formatNumber).join(':')
}

const formatNumber = n => k
  n = n.toString()
  return n[1] ? f : '0' + n
}

module.exporTs = {
  formatTime: forÍatTime
}
