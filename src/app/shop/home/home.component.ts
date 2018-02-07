// import {HomeService} from '../../shared/services/home.service';
import {Home} from '../../shared/models/home.model';
import {AppStorage} from '../../../forStorage/universal.inject';
import {TransferHttp} from '../../../modules/transfer-http/transfer-http';
import {Component, OnInit, Inject } from '@angular/core';
import {HomeService} from '../../shared/services/home.service';
// import {isPlatformBrowser} from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    body: string;
    updated_at: any;
    result: any;
    resultPost: any;

    constructor(
        private homeService: HomeService,
        private http: TransferHttp,
        @Inject(AppStorage) private appStorage: Storage,
        @Inject('ORIGIN_URL') public baseUrl: string
    ) {
        console.log(`ORIGIN_URL=${baseUrl}`);
    }

    ngOnInit() {
        //
        // if (isPlatformBrowser(this.platformId)) {
        //     console.log('isPlatformBrowser');
        //     let item = {key1: 'value1', key2: 'valu2' };
        //     localStorage.setItem( 'value1', JSON.stringify(item) );
        // }

        // this.appStorage.setItem('test', 'test2');
        // const resultCookie = this.appStorage.getItem('test');
        // console.log(resultCookie);

        // this.homeService.getConfigs()
        //     .subscribe((config: Home) => {
        //         this.body = config[0].body;
        //         this.updated_at = config[0].updated_at;
        //     });

        this.http.get('http://news.hbmdev.com/configs').subscribe(config => {
            this.body = config[0].body;
        });

    }


}
