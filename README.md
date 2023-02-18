# redis-irwansyah-betest
Project ini digunakan untuk manipulasi data redis


## berikut path url redis

### get all key cache redis 
`http://localhost:3000/keys` 
method `GET`, mendapatkan semua kunci redis

### set cache redis 
`http://localhost:3000/set/{key}/{value}` 
method `GET`, mengatur data redis({key} -> diganti dengan kunci, {value} -> diganti dengan nilai)


### get cache redis 
`http://localhost:3000/get/{key}` 
method `GET`, mencari data redis({key} -> diganti dengan kunci)


### del cache redis
`http://localhost:3000/del/{key}`
method `GET`, menghapus data redis({key} -> diganti dengan kunci)