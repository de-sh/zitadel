import { DataSource } from '@angular/cdk/collections';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { ProjectGrant } from 'src/app/proto/generated/management_pb';
import { ManagementService } from 'src/app/services/mgmt.service';

/**
 * Data source for the ProjectMembers view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProjectGrantsDataSource extends DataSource<ProjectGrant.AsObject> {
    public totalResult: number = 0;
    public viewTimestamp!: Timestamp.AsObject;
    public grantsSubject: BehaviorSubject<ProjectGrant.AsObject[]> = new BehaviorSubject<ProjectGrant.AsObject[]>([]);
    private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public loading$: Observable<boolean> = this.loadingSubject.asObservable();

    constructor(private mgmtService: ManagementService) {
        super();
    }

    public loadGrants(projectId: string, pageIndex: number, pageSize: number, sortDirection?: string): void {
        const offset = pageIndex * pageSize;

        this.loadingSubject.next(true);
        from(this.mgmtService.SearchProjectGrants(projectId, pageSize, offset)).pipe(
            map(resp => {
                const response = resp.toObject();
                this.totalResult = response.totalResult;
                if (response.viewTimestamp) {
                    this.viewTimestamp = response.viewTimestamp;
                }
                return response.resultList;
            }),
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false)),
        ).subscribe(grants => {
            this.grantsSubject.next(grants);
        });
    }


    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    public connect(): Observable<ProjectGrant.AsObject[]> {
        return this.grantsSubject.asObservable();
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    public disconnect(): void {
        this.grantsSubject.complete();
        this.loadingSubject.complete();
    }
}
