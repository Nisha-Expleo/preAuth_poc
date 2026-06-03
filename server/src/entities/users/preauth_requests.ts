//append_imports_start

import { PrimaryColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('preauth_requests')
export class preauth_requests {
  @PrimaryColumn({ name: 'preauth_id' })
  preauth_id: string;
  @Column({ name: 'policy_no', nullable: false, type: 'text', primary: false })
  policy_no: string;
  @Column({
    name: 'patient_name',
    nullable: false,
    type: 'text',
    primary: false,
  })
  patient_name: string;
  @Column({
    name: 'patient_age',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  patient_age: number;
  @Column({
    name: 'hospital_name',
    nullable: false,
    type: 'text',
    primary: false,
  })
  hospital_name: string;
  @Column({ name: 'diagnosis', nullable: false, type: 'text', primary: false })
  diagnosis: string;
  @Column({
    name: 'procedure_code',
    nullable: false,
    type: 'text',
    primary: false,
  })
  procedure_code: string;
  @Column({
    name: 'room_category',
    nullable: false,
    type: 'text',
    primary: false,
  })
  room_category: string;
  @Column({
    name: 'length_of_stay',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  length_of_stay: number;
  @Column({
    name: 'requested_amount',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  requested_amount: number;
  @Column({
    name: 'estimated_payable',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  estimated_payable: number;
  @Column({
    name: 'final_payable',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  final_payable: number;
  @Column({ name: 'mo_remarks', nullable: false, type: 'text', primary: false })
  mo_remarks: string;
  @Column({
    name: 'authorizer_remarks',
    nullable: false,
    type: 'text',
    primary: false,
  })
  authorizer_remarks: string;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
  @Column({
    name: 'approval_number',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  approval_number: number;
  @Column({
    name: 'created_at',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  created_at: Date;
  @Column({
    name: 'updated_at',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  updated_at: Date;
}
