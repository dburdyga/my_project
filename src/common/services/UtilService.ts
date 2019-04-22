// tslint:disable:no-bitwise
import Vue from 'vue';
import {RawLocation, Route} from 'vue-router';
import {RouteNames} from '@/router/RouteNames';

export class UtilService {
    public static generateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = (c === 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static getRedirectPath(route: Route): RawLocation {
        return route.query.redirect ?
            route.query.redirect as string :
            { name: RouteNames.Home };
    }

    public static readAsDataUrl(file: File): Promise<string> {
        // tslint:disable-next-line
        return new Promise((resolve, _reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result as string);
            };
            reader.readAsDataURL(file);
        });
    }

    public static mapTwoWay<T>(getter: string, mutation: string) {
        return {
            get(this: Vue): T {
                return this.$store.getters[getter];
            },
            set(this: Vue, value: T) {
                this.$store.commit(mutation, value);
            },
        };
    }
}
