//Validation input

let validation= []

function bayar() {
    let kodebarang = document.getElementById("kodebarang").value;
    let harga = document.getElementById("harga").value;
    let namaBarang = document.getElementById('namabarang').value;
    let jumlahJual = document.getElementById('jumlahjual').value;

        if(kodebarang === 0 | kodebarang === ''){
            validation.push('KODE BARANG HARUS DIISI !\n\n')
        }
        if(namaBarang === 0 | namaBarang === ''){
            validation.push('NAMA BARANG HARUS DIISI !\n\n')
        }
        if(harga === 0 | harga === ''){
            validation.push('HARGA BARANG HARUS DIISI !\n\n')
        }
        if(jumlahJual === 0 | jumlahJual === ''){
            validation.push('JUMLAH JUAL HARUS DIISI !\n\n')
        } 

    if(validation.length === 0 | validation.length === ''){
        validation.pop()
        validation.pop()
        validation.pop()
        validation.pop()
        payment()
    }else{
        alert(validation.join(''))
        validation.pop()
        validation.pop()
        validation.pop()
        validation.pop()
    }
}

//Function to determine discount value

function payment (){
    let harga = document.getElementById("harga").value;
    let jumlahJual = document.getElementById('jumlahjual').value;
    let subTotal = document.getElementById("subtotal");
    let diskon = document.getElementById('diskon');
    let nilaiDiskon = document.getElementById('nilaidiskon');
    let total = document.getElementById('total');

        A_subtotal = Number(jumlahJual) * Number(harga)
        subtotal.value= "Rp. " + A_subtotal + ",-";

        if(A_subtotal >= 250000){
            A_diskon= 25;
            diskon.value= A_diskon+"%";
            A_nilaidiskon= Number(A_subtotal) * (Number(A_diskon) /100 );
            nilaiDiskon.value= "Rp. " + A_nilaidiskon + ",-"
            A_total= Number(A_subtotal) - Number(A_nilaidiskon);
            total.value= "Rp. " + A_total+ ",-";
            }
            
            else if(A_subtotal >= 200000){
            A_diskon= 20;
            diskon.value= A_diskon+"%";
            A_nilaidiskon= Number(A_subtotal) * (Number(A_diskon) /100 );
            nilaiDiskon.value= "Rp. " + A_nilaidiskon + ",-"
            A_total= Number(A_subtotal) - Number(A_nilaidiskon);
            total.value= "Rp. " + A_total+ ",-";
            }
            
            else if (A_subtotal >= 150000){
            A_diskon= 15;
            diskon.value= A_diskon+"%";
            A_nilaidiskon= Number(A_subtotal) * (Number(A_diskon) /100 );
            nilaiDiskon.value= "Rp. " + A_nilaidiskon + ",-"
            A_total= Number(A_subtotal) - Number(A_nilaidiskon);
            total.value= "Rp. " + A_total+ ",-";
            }

            else if (A_subtotal >= 100000){
            A_diskon= 10;
            diskon.value= A_diskon+"%";
            A_nilaidiskon= Number(A_subtotal) * (Number(A_diskon) /100 );
            nilaiDiskon.value= "Rp. " + A_nilaidiskon + ",-"
            A_total= Number(A_subtotal) - Number(A_nilaidiskon);
            total.value= "Rp. " + A_total+ ",-";
            }
            
            else{
            A_diskon= 0;
            diskon.value= A_diskon+"%";
            A_nilaidiskon= Number(A_subtotal) * (Number(A_diskon) /100 );
            nilaiDiskon.value= "Rp. " + A_nilaidiskon + ",-"
            A_total= Number(A_subtotal) - Number(A_nilaidiskon);
            total.value= "Rp. " + A_total+ ",-";
            }
return        
}
