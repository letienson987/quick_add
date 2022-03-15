

const btn_add = $$('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5')

function clickAdd() {
    Array.from(btn_add).forEach(button => button.click())
    
}

setTimeout(clickAdd(), 10000);