# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Assumptions:

- agents table - contains agent id, agent meta data.
- facilities - contains facilities id, facility meta data.
- shifts - contains shifts id, agent for each shift, facility id for each shift.

- getShiftsByFacility
  - Uses Facility id to look up shifts table, grouping results with facility id, also includes some Agent meta data.
- generateReport
  - Uses Agents meta data to look up Agent id in Agents table, adding it to the report.

# Proposed solution:

- A Fourth table as an intermediary containing a list of facilities and all agents ever worked for any facility on any shift.
- Use facility id and agent id to create a unique composite id(facilityagentid) for an agent in every facility they have worked on.
- Use the Facility Agent table to generate the report.

# Tickets

    Ticket#1
    Title : Add facility-agent table.
    Description: Design and implement a new table containing composite facility-agent id.
    Estimate : 2 points

    Ticket#2
    Title : Refactor getShiftsByFacility.
    Description: Refactor getShiftsByFacility to provide agent id in addition to existing results.
    Estimate : 2 points

    Ticket#3:
    Title: Refactor generateReport.
    Description : Refactor generateReport to look up corresponding facility-agent id in new table(Ticket#1) for provided facility id, agent id. Replace the internal agendid with corresponding facility-agentid for generating reports.
    Estimate : 3 points

NOTE: estimates are relative.
