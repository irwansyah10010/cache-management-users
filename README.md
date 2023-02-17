# redis-irwansyah-betest
Project ini digunakan untuk mengambil data dari `cache redis` yang dibuat pada micro service


# berikut path url redis

### set cache redis 
`http://localhost:3000/set/:key/:value` 
method `GET`, mengatur data redis(:key -> diganti dengan kunci, :value -> diganti menjadi nilai)


### get cache redis 
`http://localhost:3000/get/:key` 
method `GET`, mencari data redis(:key -> diganti dengan kunci)

